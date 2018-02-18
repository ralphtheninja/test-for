const cmd = require('commander')

cmd
  .version(require('./package.json').version, '-v, --version')
  .option('-n <N>', 'abort after N runs (optional)', parseInt)
  .parse(process.argv)

module.exports = cmd
