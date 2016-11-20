![googleit](https://cloud.githubusercontent.com/assets/9393495/20455335/caa4c2c2-ae9c-11e6-888a-e8f5830e07ef.png)

[![Build Status](https://api.travis-ci.org/PeterTeng/googleit.svg?branch=master)](https://travis-ci.org/PeterTeng/googleit
)
[![NPM Version](http://img.shields.io/npm/v/googleit.svg?style=flat)](https://www.npmjs.com/package/googleit)
[![NPM Downloads](https://img.shields.io/npm/dm/googleit.svg?style=flat)](https://www.npmjs.com/package/googleit)
[![GitHub issues](https://img.shields.io/github/issues-raw/PeterTeng/googleit.svg)](https://github.com/PeterTeng/googleit/issues)

Command Line Tool for search on google.
You can Google it --image --video --book...

# How to use GoogleIt

## Installation

```shell
npm install -g googleit
```
Or

```shell
$ git clone git@github.com:PeterTeng/googleit.git
$ cd googleit
$ make install
```

## Usage

open your terminal and run

`googleit nodejs`

This will search `nodejs` on google

If you want to search `javascript es6` which includes whitespace, try `javascript-es6`.

### Options

|Option|Description|
|---|---|
|-i|Search image|
|-v|Search video|
|-n|Search news|
|-b|Search book|
|-p|Search patent|

# System Requirement

Currently supported OS

- macOS

May have some issue with Linux and other OS.

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

# License

[BSD-3-Clause](https://github.com/PeterTeng/googleit/blob/master/LICENSE)
