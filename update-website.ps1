Get-ChildItem -Path . -Recurse -exclude update-website.ps1 | remove-item -Confirm:$false -Force
cd ..
# npm run build --modern
cd simonecarletti.github.io
Copy-item -Force -Recurse -Verbose ..\dist\* -Destination .\
git add .
git commit -am "updated website"
git push
