var should = require('should');

function getUnknownOptionError(callback) {
  var exec = require('child_process').exec;
  var cmd = 'node index.js -z';

  exec(cmd, function(error, stdout, stderr) {
    result = error.message;
    callback(result)
  })
}
var errorMatch = function(result) {
  result.should.be.exactly('Command failed: node index.js -z\n\n  error: unknown option `-z\'\n\n');
}

getUnknownOptionError(errorMatch);
