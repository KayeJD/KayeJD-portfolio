#### Notes for Kaye:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash#
 \. "$HOME/.nvm/nvm.sh"
nvm install 22
npm install -g npm@11.6.2
git remote add origin https://github.com/KayeJD/KayeJD-portfolio.git
git remote set-url origin git@github.com:KayeJD/KayeJD-portfolio-main.git
git remote -v
npm run deploy

git fetch --prune
git branch -D gh-pages 2>/dev/null || echo "No local gh-pages branch to delete"
git branch -r
rm -rf build dist .cache node_modules/.cache
npm install
