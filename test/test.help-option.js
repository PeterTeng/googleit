var should = require('should');

// Usage: googleit [options] <word>
//
// Options:
//
//   -h, --help                output usage information
//   -V, --version             output the version number
//   -i, --image               Search Image on Google
//   -n, --news                Search News on Google
//   -v, --video               Search Video on Google
//   -p, --patent              Search Patent on Google
//   -b, --book                Search Book on Google
//   -e, --except <exception>  Search with exception
//
// Examples:
//
//   $ googleit weather-tomorrow
//   $ googleit -i cat
//   $ googleit -b harry-potter

var exec = require('child_process').exec;

var cmd = 'node index.js --help';
testHelpOutputWithCommand(cmd);
cmd = 'node index.js -h';
testHelpOutputWithCommand(cmd);

function testHelpOutputWithCommand(cmd) {
  exec(cmd, function(error, stdout, stderr) {
    result = stdout;

    // Test text setion
    result.includes('Usage:').should.equal(true);
    result.includes('Options:').should.equal(true);
    result.includes('Examples:').should.equal(true);

    // Test Usage content
    result.includes('index [options] <word>').should.equal(true);

    // Test Option content
    result.includes('-h, --help').should.equal(true);
    result.includes('output usage information').should.equal(true);
    result.includes('-V, --version').should.equal(true);
    result.includes('output the version number').should.equal(true);
    result.includes('-i, --image').should.equal(true);
    result.includes('Search Image on Google').should.equal(true);
    result.includes('-n, --news').should.equal(true);
    result.includes('Search News on Google').should.equal(true);
    result.includes('-v, --video').should.equal(true);
    result.includes('Search Video on Google').should.equal(true);
    result.includes('-p, --patent').should.equal(true);
    result.includes('Search Patent on Google').should.equal(true);
    result.includes('-b, --book').should.equal(true);
    result.includes('Search Book on Google').should.equal(true);
    result.includes('-b, --book').should.equal(true);
    result.includes('Search Book on Google').should.equal(true);
    result.includes('-e, --except <exception>').should.equal(true);
    result.includes('Search with exception').should.equal(true);

    // Test Examples content
    result.includes('$ googleit weather-tomorrow').should.equal(true);
    result.includes('$ googleit -i cat').should.equal(true);
    result.includes('$ googleit -b harry-potter').should.equal(true);
  })
}
