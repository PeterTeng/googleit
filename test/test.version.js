var should = require('should');
var fs = require('fs');

// ReplaceAll function(replaceThisWord, replacement)
// Use in multiple terms search
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

function readProgramVersion(callback) {
  var exec = require('child_process').exec;
  var cmd = 'node index.js -V';

  exec(cmd, function(error, stdout) {
    var result = stdout.replaceAll('\n', '');
    callback(result);
  });
}

var currentVersion = fs.readFileSync('VERSION', 'utf8');
currentVersion = currentVersion.replaceAll('\n', '');


var testVersionMatch = function(result) {
  var shouldEqualVersion = currentVersion;
  var programVersion = result;
  programVersion.should.equal(shouldEqualVersion);
};

readProgramVersion(testVersionMatch);
