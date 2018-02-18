# test-for

> Run `npm test` until it breaks

![Node version](https://img.shields.io/node/v/test-for.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/test-for.svg?branch=master)](https://travis-ci.org/ralphtheninja/test-for)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Sometimes when testing you run into race conditions so you need a test runner to keep tests running until they break. Or you want to do stress testing for other reasons.

## Install

```
$ npm i test-for -g
```

## Usage

Run `npm test` forever or until it breaks:

```
$ test-for
```

Run `npm test` until it breaks or reaches `10000` runs:

```
$ test-for -n 10000
```

## License

MIT
