#! /usr/bin/env node
var program = require('commander');
program
  .arguments('<word>')
  .option('-i, --image', 'Search Image on google')

  .action(function(word) {
    var exec = require('child_process').exec;
    var cmd = "open https://google.com/#q=" + word;

    if (program.image) {
      cmd = "open \'https://google.com/search?q=" + word + "&tbm=isch\'"
      exec(cmd, function(error, stdout, stderr) {
        console
        .log(
            cmd
        );
      });
    } else {
      exec(cmd, function(error, stdout, stderr) {
        console
        .log(
            "Open Browser and search: " + word
        );
      });
    }
  })
 .parse(process.argv);
