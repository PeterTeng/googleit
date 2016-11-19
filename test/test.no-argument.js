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
