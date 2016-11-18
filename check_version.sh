#!/bin/sh
index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

echo "Version in index.js : $index_version"
echo "Version in package.json : $package_version"

published_latest_version=`npm info googleit version`

echo "Version on npm : $published_latest_version"
