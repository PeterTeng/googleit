var should = require('should');


function testErrorMessage(error, stdout, stderr, option) {
  stdout.should.be.exactly('');
  should.exist(error.message);
  if ( option === 'noOption') {
    error.message.should.be.exactly('Command failed: node index.js\nPlease enter searh terms. "googleit <terms>"\n');
  } else {
    error.message.should.be.exactly('Command failed: node index.js -' + option + '\nPlease enter searh terms. "googleit <terms>"\n');
  }
}

var exec = require('child_process').exec;
var cmd = 'node index.js';

exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'noOption');
})

// Test option provided but no argument
// Options
// program
//   .option('-i, --image', 'Search Image on Google')
//   .option('-n, --news', 'Search News on Google')
//   .option('-v, --video', 'Search Video on Google')
//   .option('-p, --patent', 'Search Patent on Google')
//   .option('-b, --book', 'Search Book on Google')
var cmd = 'node index.js -i';
exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'i');
})

var cmd = 'node index.js -n';
exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'n');
})

var cmd = 'node index.js -v';
exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'v');
})

var cmd = 'node index.js -p';
exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'p');
})

var cmd = 'node index.js -b';
exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr, 'b');
})
