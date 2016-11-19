#! /usr/bin/env node

/*
 * Module dependencies.
 */
var program = require('commander');
var chalk = require('chalk');

// Googleit's version
// Only change this in release branch
program.version('1.1.6');

// Print red error message
function printConsoleError(message) {
  var fullMessage = '\n    ' + message + '\n'
  console.error(chalk.red(fullMessage));
}

// Check system is running on macOS or not => Show error message and retrun false
function checkEnvironment(callback) {
  var exec = require('child_process').exec;
  var cmd = 'uname -s';
  exec(cmd, function(error, stdout, stderr) {
    if (!stdout.includes('Darwin')) {
      var errorMessage = 'googleit only supports macOS. Using other OS may causing error.';
      printConsoleError(errorMessage);
      result = false;
      callback(result);
      process.exit(1);
    } else {
      result = true;
      callback(result);
    }
  })
}

// Callback for checkEnvironment
var checkEnvironmentIsTrue = function(param) {
  if (param === true) {
    argumentsExist(typeof wordValue);
  }
}

// Error message when no any argument
function argumentsExist(wordValue) {
  if (wordValue === 'undefined') {
    var errorMessage = '\n    Please enter search terms. "googleit <terms>"\n'
    console.error(chalk.red(errorMessage));
    process.exit(1);
  }
}

// ReplaceAll function(replaceThisWord, replacement)
// Use in multiple terms search
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

// CheckEnvironment before check argumentsExistence
checkEnvironment(checkEnvironmentIsTrue);

// Example command usages in --help
program.on('--help', function() {
  console.log('  Examples:');
  console.log('');
  console.log('    $ googleit weather-tomorrow');
  console.log('    $ googleit -i cat');
  console.log('    $ googleit -b harry-potter');
  console.log('');
});

program
  .arguments('<word>')
  .option('-i, --image', 'Search Image on Google')
  .option('-n, --news', 'Search News on Google')
  .option('-v, --video', 'Search Video on Google')
  .option('-p, --patent', 'Search Patent on Google')
  .option('-b, --book', 'Search Book on Google')

  .action(function(word) {

    wordValue = word;
    word = word.replaceAll('-', '%20');

    var exec = require('child_process').exec;
    var cmd = 'open https://google.com/#q=' + word;
    var base = "open \'https://google.com/search?q="
    if (program.image) {
      cmd = base + word + "&tbm=isch\'";
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.news) {
      cmd = base + word + "&tbm=nws\'";
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.video) {
      cmd = base + word + "&tbm=vid\'";
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.patent) {
      cmd = base + word + "&tbm=pts\'";
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.book) {
      cmd = base + word + "&tbm=bks\'";
      exec(cmd, function(error, stdout, stderr) {});
    } else {
      exec(cmd, function(error, stdout, stderr) {});
    }
  })
  .parse(process.argv);
