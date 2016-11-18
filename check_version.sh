#!/bin/bash

error_count=0
echo_error() {
  RED='\033[0;31m'
  NC='\033[0m' # No Color
  echo -e "${RED}** ERROR${NC}"
  echo -e "${RED}* $1${NC}"
  echo -e "${RED}**${NC}"
  (( error_count++ ))
}

warning_count=0
echo_warning() {
  YELLOW='\033[1;33m'
  NC='\033[0m' # No Color
  echo -e "${YELLOW}** WARNING${NC}"
  echo -e "${YELLOW}* $1${NC}"
  echo -e "${YELLOW}**${NC}"
  (( warning_count++ ))
}

index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

current_version=`cat VERSION`

published_latest_version=`npm info googleit version`

echo "                   Version on npm : $published_latest_version"
echo "  Current version in version file : $current_version"
echo "--------------------------------------------------"
echo "              Version in index.js : $index_version"
echo "          Version in package.json : $package_version"

read -r -p "Are you going to match all version to all files? [y/N] " response
case $response in
    [yY][eE][sS]|[yY])
      echo "You say yes"
      read -r -p "What version are you going to set for match? [e.g.) 0.0.9] " version

      if [[ $version =~ ([0-9].[0-9].[0-9]) ]]; then
        if [ $current_version != $version ]; then
          perl -i -pe "s/$current_version/$version/g" VERSION
          echo_warning "Replace $current_version to $version in VERSION"
        fi

        if [ $index_version != $version ]; then
          perl -i -pe "s/$index_version/$version/g" index.js
          echo_warning "Replace $index_version to $version in index.js"
        fi

        if [ $package_version != $version ]; then
          perl -i -pe "s/$package_version/$version/g" index.js
          echo_warning "Replace $package_version to $version in index.js"
        fi
      else
        echo_warning "Version format should be such as 2.1.0"
      fi
      ;;
    *)
      echo "You said no"
      ;;
esac
