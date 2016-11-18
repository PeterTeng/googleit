#!/bin/sh
index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

echo "Version in index.js : $index_version"
echo "Version in package.json : $package_version"
