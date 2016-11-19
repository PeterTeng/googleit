var should = require('should');

var exec = require('child_process').exec;
var cmd = 'node index.js';

function testErrorMessage(error, stdout, stderr) {
  stdout.should.be.exactly('');
  should.exist(error.message);
  error.message.should.be.exactly('Command failed: node index.js\nPlease enter searh terms. "googleit <terms>"\n');
}

exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr);
})
