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

echo_cyan() {
  CYAN='\033[0;36m'
  NC='\033[0m' # No Color
  echo -e "${CYAN}$1${NC}"
}

echo_yellow() {
  YELLOW='\033[1;33m'
  NC='\033[0m' # No Color
  echo -e "${YELLOW}$1${NC}"
}

index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

current_version=`cat VERSION`

published_latest_version=`npm info googleit version`

echo ""
echo "--------------------------------------------------"
echo " Check Version in each file                       "
echo "--------------------------------------------------"
echo_cyan "|                   Version on npm : $published_latest_version"
echo_cyan "|  Current version in version file : $current_version"
echo "--------------------------------------------------"
echo_cyan "|              Version in index.js : $index_version"
echo_cyan "|          Version in package.json : $package_version"
echo "--------------------------------------------------"
echo ""

read -r -p "Are you going to match all version strings in project? [y/N] " response
case $response in
    [yY][eE][sS]|[yY])
      read -r -p "What version are you going to set for match? " version

      echo ""
      if [[ $version =~ ([0-9].[0-9].[0-9]) ]]; then
        if [ $current_version != $version ]; then
          perl -i -pe "s/$current_version/$version/g" VERSION
          echo_yellow "Replaced $current_version to $version in VERSION"
        fi

        if [ $index_version != $version ]; then
          perl -i -pe "s/$index_version/$version/g" index.js
          echo_yellow "Replaced $index_version to $version in index.js"
        fi

        if [ $package_version != $version ]; then
          perl -i -pe "s/$package_version/$version/g" package.json
          echo_yellow "Replaced $package_version to $version in package.json"
        fi
        echo ""

      else
        echo_warning "Version format should be like 2.1.0"
      fi
      index_version=`cat index.js | grep version | grep -o "'.*'"| tr -d "'"`
      package_version=`perl -nle 'print $& if m{(?<="version": ")[^"]*}' package.json`

      current_version=`cat VERSION`

      published_latest_version=`npm info googleit version`
      echo "--------------------------------------------------"
      echo_cyan "|                   Version on npm : $published_latest_version"
      echo_cyan "|  Current version in version file : $current_version"
      echo "--------------------------------------------------"
      echo_cyan "|              Version in index.js : $index_version"
      echo_cyan "|          Version in package.json : $package_version"
      echo "--------------------------------------------------"
      ;;
    *)
      echo "Restart if you want to replace version strings"
      echo ""
      ;;
esac

echo_cyan "--------------------------------------------------"
echo_cyan "|            Version check Finished"
echo_cyan "--------------------------------------------------"
