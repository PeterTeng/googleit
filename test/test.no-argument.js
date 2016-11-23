var should = require('should');

var exec = require('child_process').exec;

// Check if error tyype is command failed
function shouldBeCommandFailed(error) {
  error.message.includes('Command failed:').should.equal(true);
}

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

var cmd = 'uname -s';
exec(cmd, function(error, stdout) {
  if (!stdout.includes('Darwin')) {
    var googleitCmd = 'node index.js';
    exec(googleitCmd, function(error) {
      shouldBeCommandFailed(error);
      error.message.includes('googleit only supports macOS. Using other OS may causing error.').should.equal(true);
    });
  } else {
    var cmd = 'node index.js';

    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'noOption');
    });

    // Test option provided but no argument
    // Options
    // program
    //   .option('-i, --image', 'Search Image on Google')
    //   .option('-n, --news', 'Search News on Google')
    //   .option('-v, --video', 'Search Video on Google')
    //   .option('-p, --patent', 'Search Patent on Google')
    //   .option('-b, --book', 'Search Book on Google')
    cmd = 'node index.js -i';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'i');
    });

    cmd = 'node index.js --image';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'image');
    });

    cmd = 'node index.js -n';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'n');
    });

    cmd = 'node index.js --news';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'news');
    });

    cmd = 'node index.js -v';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'v');
    });

    cmd = 'node index.js --video';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'video');
    });

    cmd = 'node index.js -p';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'p');
    });

    cmd = 'node index.js --patent';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'patent');
    });

    cmd = 'node index.js -b';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'b');
    });

    cmd = 'node index.js --book';
    exec(cmd, function(error, stdout, stderr) {
      testErrorMessage(error, stdout, stderr, 'book');
    });
  }
});
