/**
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('is-kindof');
var chalk = require('chalk');
var npmRelated = require('./index');
var symbols = require('log-symbols');
var argv = process.argv.slice(2);
var exit = process.exit;

if (is.array(argv) && !argv.length) {
  var msg = chalk.red('should provide package names');
  console.error('\n  %s %s\n', symbols.error, msg);
  exit(1);
}

npmRelated(argv, function _cb(err, res) {
  if (!is.null(err)) {
    console.error('\n  %s %s\n', symbols.error, chalk.red(err.message));
    exit(1);
  }
  console.log('%s\n', chalk.gray(res.trim().replace(/\s*\*\s+/g,'\n- ')));
  exit(0);
});
