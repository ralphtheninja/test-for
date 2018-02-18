const cmd = require('commander')

cmd
  .version(require('./package.json').version, '-v, --version')
  .option('-n [N]', 'abort after N runs', parseInt, +Infinity)
  .parse(process.argv)

module.exports = cmd
