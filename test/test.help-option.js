var should = require('should');

// Usage: index [options] <word>
//
//   Options:
//
//     -h, --help     output usage information
//     -V, --version  output the version number
//     -i, --image    Search Image on Google
//     -n, --news     Search News on Google
//     -v, --video    Search Video on Google
//     -p, --patent   Search Patent on Google
//     -b, --book     Search Book on Google
//
//   Examples:
//
//     $ googleit weather-tomorrow
//     $ googleit -i cat
//     $ googleit -b harry-potter

var exec = require('child_process').exec;
var cmd = 'node index.js --help';

exec(cmd, function(error, stdout, stderr) {
  result = stdout;

  // Test text setion
  result.includes('Usage:').should.equal(true);
  result.includes('Options:').should.equal(true);
  result.includes('Examples:').should.equal(true);

})
