#!/usr/bin/env bash

# abort on errors
set -e

cd docs/

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -uf git@github.com:daylight-lab/daylight-lab.github.io.git master

cd -
