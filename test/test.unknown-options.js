var should = require('should');

// Test -z option which is not exist in options
var optionForTest = "-z"
function getUnknownOptionError(callback) {
  var exec = require('child_process').exec;
  var cmd = 'node index.js' + ' ' + optionForTest;

  exec(cmd, function(error, stdout, stderr) {
    result = error.message;
    callback(result)
  })
}
var errorMatch = function(result) {
  result.includes('Command failed:').should.be.true;
  result.includes('index.js' + ' ' + optionForTest).should.be.true;
  result.includes('error: unknown option `' + optionForTest).should.be.true;
}

getUnknownOptionError(errorMatch);
