#! /usr/bin/env node
var program = require('commander');
program
  .arguments('<word>')
  .option('-i, --image', 'Search Image on Google')
  .option('-n, --news', 'Search News on Google')
  .option('-v, --video', 'Search Video on Google')
  .option('-p, --patent', 'Search Patent on Google')

  .action(function(word) {
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    word = word.replaceAll("-", "%20");

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
    } else if (program.patent) {
      cmd = base + word + "&tbm=pts\'"
      exec(cmd, function(error, stdout, stderr) {});
    } else {
      exec(cmd, function(error, stdout, stderr) {});
    }
  })
  .parse(process.argv);