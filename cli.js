#!/usr/bin/env node
/**
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('is-kindof');
var meow = require('meow');
var chalk = require('chalk');
var multiline = require('multiline');
var npmRelated = require('./index');
var symbols = require('log-symbols');
var exit = process.exit;

var cli = meow({
  help: chalk.gray(multiline.stripIndent(function() {/*
    Options
      --help        show this help
      --version     current version
      --truncate    truncate description (to 15 words by default)
      --words       maximum words of description

    Usage
      npm-related [names...]

    Example
      npm-related gulp verb utils koa lodash
      npm-related micromatch assemble --truncate
      npm-related remarkable express --words 2

  */}))
});

if (is.array(cli.input) && !cli.input.length) {
  var msg = chalk.red('should provide package names, try run');
  console.error('\n  %s %s', symbols.error, msg);
  console.error('  %s %s\n', symbols.error, chalk.blue('npm-related --help'));
  exit(1);
}

// dont truncate description by default
cli.flags.truncate = cli.flags.truncate === true ? true : false;

npmRelated(cli.input, cli.flags, function _cb(err, res) {
  if (!is.null(err)) {
    console.error('\n  %s %s\n', symbols.error, chalk.red(err.message));
    exit(1);
  }
  console.log('%s\n', chalk.gray(res.trim().replace(/\s*\*\s+/g,'\n- ')));
  exit(0);
});
