![googleit](https://cloud.githubusercontent.com/assets/9393495/20455335/caa4c2c2-ae9c-11e6-888a-e8f5830e07ef.png)

[![Build Status](https://api.travis-ci.org/PeterTeng/googleit.svg?branch=master)](https://travis-ci.org/PeterTeng/googleit
)
[![NPM Version](http://img.shields.io/npm/v/googleit.svg?style=flat)](https://www.npmjs.com/package/googleit)
[![NPM Downloads](https://img.shields.io/npm/dm/googleit.svg?style=flat)](https://www.npmjs.com/package/googleit)
[![GitHub issues](https://img.shields.io/github/issues-raw/PeterTeng/googleit.svg)](https://github.com/PeterTeng/googleit/issues)

Command Line Tool for search on google.
You can Google it with --image --video --book...

# How to use GoogleIt

## Installation

```shell
$ npm install -g googleit
```
Or

```shell
$ git clone git@github.com:PeterTeng/googleit.git
$ cd googleit
$ make install
```

## Usage

Search `nodejs` with command below.

```shell
$ googleit nodejs
```

### Multiple Search Words

Search Harry Potter as Book.

```shell
$ googleit -b harry-potter
```

### Options

|Option|Description|
|---|---|
|-i|Search image|
|-v|Search video|
|-n|Search news|
|-b|Search book|
|-p|Search patent|

### Search with exception

```javascript
googleit hello -e adele
```

# System Requirement

- macOS

# Website

[GoogleIt](https://peterteng.github.io/googleit/)

# Help Google It?

## Running test

```shell
$ make test
```

## Install GoogleIt for development

```shell
$ make dev-install
```

## Commit Message

You can follow this emoji commit message template

```
$ git config commit.template .commit_template
```

```
# 🐛 :bug: when fixing a bug
# 🔥 :fire: when removing code or files
# 🎨 :art: when improving the format/structure of the code
# 🐎 :racehorse: when improving performance
# 📝 :memo: when writing docs
# 💚 :green_heart: when fixing the CI build
# ✅ :white_check_mark: when adding tests
# 👮 :cop: when dealing with security
# 👕 :shirt: when removing linter warnings
```

# License

[BSD-3-Clause](https://github.com/PeterTeng/googleit/blob/master/LICENSE)
