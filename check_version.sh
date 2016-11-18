#!/bin/sh

index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

current_version=`cat VERSION`

published_latest_version=`npm info googleit version`

echo "                   Version on npm : $published_latest_version"
echo "  Current version in version file : $current_version"
echo "--------------------------------------------------"
echo "              Version in index.js : $index_version"
echo "          Version in package.json : $package_version"

#
# Basic CPU and Memory information
#
read -r -p "Are you going to publish? [y/N] " response
case $response in
    [yY][eE][sS]|[yY])
      echo "You say yes"
      ;;
    *)
      echo "You said no"
      ;;
esac
