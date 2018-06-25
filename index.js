#!/usr/bin/env node

'use strict'

const spawn = require('child_process').spawn
const chalk = require('chalk')
const cmd = require('./cmd')

let count = 0
const MAX = cmd.N

function test () {
  if (count === MAX) {
    console.log(chalk.yellow(`\nFinished running ${count} tests!`))
    process.exit(0)
  }
  ++count
  const child = spawn('npm', [ 'test' ], { stdio: 'inherit' })
  child.on('exit', code => {
    if (code !== 0) {
      console.log(chalk.red(`Test number ${count} broke!`))
      process.exit(code)
    } else {
      if (MAX === +Infinity) {
        console.log(chalk.green(`Test ${count} [OK]`))
      } else {
        console.log(chalk.green(`Test ${count}/${MAX} [OK]`))
      }
      test()
    }
  })
}

if (MAX === +Infinity) {
  console.log(chalk.yellow('Running until it breaks!'))
} else {
  console.log(chalk.yellow(`Running max ${MAX} tests or until it breaks!`))
}

test()
