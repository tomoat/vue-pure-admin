#!/usr/bin/env sh

# Replace packaging path
sed -i "s#VITE_PUBLIC_PATH = /#VITE_PUBLIC_PATH = /vue-pure-admin/#g" $(pwd)/.env.production

# Make sure the script throws the error encountered
set -e

pnpm build
cd dist
touch README.md .nojekyll 

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:tomoat/vue-pure-admin.git
else
  msg='ci: Automatic deployment from github actions'
  githubUrl=https://tomoat:${GITHUB_TOKEN}@github.com/tomoat/vue-pure-admin.git
  git config --global user.name "tomoat"
  git config --global user.email "ljc6qx@163.com"
fi
git init
git add -A
git commit -m "${msg}"
# Push to github gh-pages branch
git push -f $githubUrl master:gh-pages

cd -
rm -rf dist
