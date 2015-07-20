#!/usr/bin/env node
/*!
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var exit = process.exit
var red = require('ansi-red')
var gray = require('ansi-gray')
var error = require('error-symbol')
var related = require('./index')
var minimist = require('minimist')
var multiline = require('multiline')

var cli = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
    version: 'v'
  }
})

if (cli.help) {
  console.log(gray(multiline.stripIndent(function () { /*
    Command-line app for generating a list of markdown links to
    the homepages of related npm/github projects. Can be used as
    API of `helper-related` package.

      Options (plus any options introduced in helper-related)
        --help        show this help
        --version     current version
        --truncate    truncate description (to 15 words by default)
        --words       maximum words of description
        --remove      glob patterns (can be comma separated)

      Usage
        npm-related [names...] [options]

      Example
        npm-related gulp verb utils koa lodash
        npm-related micromatch assemble --truncate
        npm-related remarkable express --words 2
        npm-related template assemble remarkable --remove assemble

      Readme:  https://github.com/tunnckoCore/npm-related
      Helper:  https://github.com/helpers/helper-related
      Report bugs:  https://github.com/tunnckoCore/npm-related/issues

  */})))
  exit(0)
}

if (cli.version) {
  console.log(require('./package.json').version)
  exit(0)
}

cli.remove = cli.remove || ''
if (cli.remove.indexOf(',') !== -1) {
  cli.remove = cli.remove.split(',')
}

if (Array.isArray(cli._) && !cli._.length) {
  var msg = red('should provide package name(s), try run')
  console.error('\n  %s %s', red(error), msg)
  console.error('  %s %s\n', red(error), 'npm-related --help')
  exit(1)
}

// dont truncate description by default
cli.truncate = cli.truncate || false

related(cli._, cli, function _cb (err, res) {
  if (err) {
    console.error('\n  %s %s\n', red(error), red(err.message))
    exit(1)
    return
  }
  console.log('%s\n', gray(res.trim().replace(/\s*\*\s+/g, '\n- ')))
  exit(0)
})
