#! /usr/bin/env node
var program = require('commander');
program
  .arguments('<word>')
  .action(function(word) {
    var exec = require('child_process').exec;
    var cmd = "open https://google.com/#q=" + word;

    exec(cmd, function(error, stdout, stderr) {
      console
      .log(
          "Open Browser and search: " + word
      );
    });
  })
 .parse(process.argv);
