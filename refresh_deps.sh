echo "--------------- Removing package-lock.json ---------------"
rm package-lock.json

echo "--------------- Removing node_modules ---------------"
rm -rf node_modules

echo "--------------- Cleaning npm cache ---------------"
npm cache clean --force

echo "--------------- Removing .next---------------"
rm -rf .next

echo "--------------- Removing build ---------------"
rm -rf out

echo "--------------- Reinstalling npm modules ---------------"
npm install