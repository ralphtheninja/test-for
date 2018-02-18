#!/usr/bin/env node

'use strict'

const spawn = require('child_process').spawn
const cmd = require('./cmd')

let count = 0
const MAX = cmd.N

function test () {
  if (++count > MAX) {
    process.exit(0)
  }
  const child = spawn('npm', [ 'test' ], { stdio: 'inherit' })
  child.on('exit', code => {
    if (code !== 0) {
      console.log(`Test number ${count} broke!`)
      process.exit(code)
    } else {
      test()
    }
  })
}

test()
