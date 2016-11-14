#! /usr/bin/env node

var program = require('commander');

program
  .arguments('<word>')
  .option('-i, --image', 'Search Image on Google')
  .option('-n, --news', 'Search News on Google')
  .option('-v, --video', 'Search Video on Google')

  .action(function(word) {
    var exec = require('child_process').exec;
    var cmd = "open https://google.com/#q=" + word;

    let base = "open \'https://google.com/search?q="
    if (program.image) {
      cmd = base + word + "&tbm=isch\'"
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.news) {
      cmd = base + word + "&tbm=nws\'"
      exec(cmd, function(error, stdout, stderr) {});
    } else if (program.video) {
      cmd = base + word + "&tbm=vid\'"
      exec(cmd, function(error, stdout, stderr) {});
    } else {
      exec(cmd, function(error, stdout, stderr) {});
    }
  })
 .parse(process.argv);
