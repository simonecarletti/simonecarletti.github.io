// Simple front matter parser
function parseFrontMatter(markdown) {
  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---\s*/;
  const match = markdown.match(frontMatterRegex);

  if (!match) return { attributes: {}, body: markdown };

  const yaml = match[1];
  const body = markdown.slice(match[0].length);

  const attributes = {};
  yaml.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      const value = rest.join(":").trim();
      try {
        attributes[key.trim()] = JSON.parse(value); // handles strings, numbers, arrays
      } catch {
        attributes[key.trim()] = value;
      }
    }
  });

  return { attributes, body };
}
