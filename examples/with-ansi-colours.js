const chalk = require('chalk')

const fmt = require('../fmt.js')

const fields = {
  date: '2020-06-08',
  symbol: 'NET',
  open: 29.49,
  close: 29.17,
  high: 29.49,
  low: 28.35,
  volume: 2697785,
  change: 0.03,
  changePercent: 0.103,
}

fmt.sep()
fmt.title(chalk.magenta('The Title'))
fmt.line()
for (let [key, value] of Object.entries(fields)) {
  fmt.field(chalk.green(key), chalk.yellow(value))
}
fmt.sep()
