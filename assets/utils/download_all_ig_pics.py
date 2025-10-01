import os
from instagrapi import Client
import json
import time
import requests
import pathlib
SCRIPT_DIR = pathlib.Path(__file__).parent.resolve()

#pip install --upgrade instagrapi

print("🚀 Starting Instagram image downloader...")

##### CONFIGS #####
DEST_ROOT = str((SCRIPT_DIR / "../images").resolve())  # Ensure DEST_ROOT is relative to the script location
MEDIA_FOLDER = "instagram"
METADATA_FILE = "instagram.json"
SECRETS_FILE = "secrets"
###################


################ CREDENTIALS ################
def read_secrets(filepath=SECRETS_FILE):
    creds = {}
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and "=" in line and not line.startswith("#"):
                key, val = line.split("=", 1)
                creds[key.strip()] = val.strip()
    return creds

secrets = read_secrets()

USERNAME = secrets.get("USERNAME")
PASSWORD = secrets.get("PASSWORD")

if not USERNAME or not PASSWORD:
    raise ValueError("USERNAME or PASSWORD missing in secrets file")


#################### INIT ####################

print(f"🔐 Logging in with user {USERNAME}")
cl = Client()
cl.login(USERNAME, PASSWORD)
user_id = cl.user_id_from_username(USERNAME)

MEDIA_FOLDER_FULL = os.path.join(DEST_ROOT, MEDIA_FOLDER)
METADATA_FILE_FULL = os.path.join(DEST_ROOT, MEDIA_FOLDER_FULL, METADATA_FILE)

if not os.path.exists(DEST_ROOT):
    raise FileNotFoundError(f"Destination root directory '{DEST_ROOT}' does not exist.")


os.makedirs(MEDIA_FOLDER_FULL, exist_ok=True)


################### FETCH ####################

print(f"📥 Fetching media list")
all_medias = []
max_pages = 100  # safety limit to avoid infinite loops (adjust if needed)
amount_per_page = 50  # max allowed is 50
end_cursor = None

for _ in range(max_pages):
    medias = cl.user_medias_paginated(user_id, amount_per_page, end_cursor=end_cursor)
    if not medias or not medias[0]:
        break
    all_medias.extend(medias[0])
    end_cursor = medias[1]
    if not end_cursor:
        break
    time.sleep(1)  # to avoid rate-limiting

# Get already downloaded post PKs by scanning filenames
existing_files = os.listdir(MEDIA_FOLDER_FULL)
downloaded_pks = {f.split("__")[0] for f in existing_files if "__" in f and f.endswith(".jpg")}


################## DOWNLOAD ##################

# Load existing metadata (pk keys)
if os.path.exists(METADATA_FILE_FULL):
    with open(METADATA_FILE_FULL, "r", encoding="utf-8") as f:
        metadata_summary = json.load(f)
else:
    metadata_summary = []

metadata_by_pk = {item["pk"]: item for item in metadata_summary}

print(f"ℹ️ Fetched {len(all_medias)} total posts from Instagram.")

# Download images and build metadata summary
for media in all_medias:
    pk = str(media.pk)

    # Skip if already in metadata (assumed downloaded)
    if pk in metadata_by_pk:
        print(f"⏭️ Skipping already downloaded post {pk}")
        continue

    # Download images logic here...
    image_candidates = []
    if media.resources:
        for resource in media.resources:
            url = str(resource.thumbnail_url or resource.image_versions2.candidates[0].url)
            image_candidates.append(url)
    else:
        url = str(media.thumbnail_url or media.image_versions2.candidates[0].url)
        image_candidates.append(url)

    for i, url in enumerate(image_candidates, 1):
        filename = f"{pk}__{i}.jpg"
        filepath = os.path.join(MEDIA_FOLDER_FULL, filename)
        try:
            r = requests.get(url)
            if r.ok:
                with open(filepath, 'wb') as f:
                    f.write(r.content)
                print(f"✅ Downloaded {filename}")
            else:
                print(f"❌ Failed to download {filename}")
        except Exception as e:
            print(f"⚠️ Error downloading {filename}: {e}")

    # Add metadata for this post
    metadata_by_pk[pk] = {
        "pk": pk,
        "taken_at": media.taken_at.isoformat(),
        "location": media.location.name if media.location else None,
        "caption": media.caption_text or "",
        "images": [f"{pk}__{i}.jpg" for i in range(1, len(image_candidates) + 1)],
        "url": f"https://www.instagram.com/p/{media.code}/",
    }


#################### SAVE ####################

# Save summary metadata
with open(METADATA_FILE_FULL, "w", encoding="utf-8") as f:
    json.dump(list(metadata_by_pk.values()), f, ensure_ascii=False, indent=4)

print(f"\n✅ Done. Images saved in '{MEDIA_FOLDER_FULL}', metadata saved in '{METADATA_FILE_FULL}'")
