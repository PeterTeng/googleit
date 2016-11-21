var should = require('should');
var exec = require('child_process').exec;

// Expected Output
// error: option `-e, --except <exception>' argument missing

function shouldBeCommandFailed(error) {
  error.message.includes('Command failed:').should.equal(true);
  error.message.includes('error:').should.equal(true);
}

function testErrorMessage(error, stdout, stderr) {
  shouldBeCommandFailed(error);
  stdout.should.equal('');
  error.message.includes("error: option `-e, --except <exception>' argument missing").should.equal(true);
}


var cmd = 'node index.js -e';

exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr);
})


cmd = 'node index.js -i hello -e';

exec(cmd, function(error, stdout, stderr) {
  testErrorMessage(error, stdout, stderr);
})
