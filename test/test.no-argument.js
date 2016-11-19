var should = require('should');

// Check if error tyype is command failed
function shouldBeCommandFailed(error) {
  error.message.includes('Command failed:').should.equal(true);
}

var exec = require('child_process').exec;
var cmd = 'uname -s'
exec(cmd, function(error, stdout, stderr) {
  if (!stdout.includes('Darwin')) {
    cmd = 'node index.js';
    exec(cmd, function(error, stdout, stderr) {
      shouldBeCommandFailed(error);
      error.message.includes('googleit only supports macOS. Using other OS may causing error.').should.equal(true);
    })
  } else {
    function testErrorMessage(error, stdout, stderr, option) {
      stdout.should.be.exactly('');
      should.exist(error.message);
      if ( option === 'noOption') {
        shouldBeCommandFailed(error);
        error.message.includes('Please enter search terms. "googleit <terms>"').should.equal(true);
      } else {
        shouldBeCommandFailed(error);
        error.message.includes(option).should.equal(true);
        error.message.includes('Please enter search terms. "googleit <terms>"').should.equal(true);
      }
    }

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

    var cmd = 'node index.js --image';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'image');
    })

    var cmd = 'node index.js -n';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'n');
    })

    var cmd = 'node index.js --news';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'news');
    })

    var cmd = 'node index.js -v';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'v');
    })

    var cmd = 'node index.js --video';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'video');
    })

    var cmd = 'node index.js -p';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'p');
    })

    var cmd = 'node index.js --patent';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'patent');
    })

    var cmd = 'node index.js -b';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'b');
    })

    var cmd = 'node index.js --book';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'book');
    })
  }
})
