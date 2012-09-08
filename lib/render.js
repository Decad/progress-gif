var exec = require('child_process').exec;

module.exports = function(url, options, fn){
  var cmd = ['phantomjs', 'lib/pagebase64.js', url];
  cmd = cmd.join(' ');
  exec(cmd, fn);
};