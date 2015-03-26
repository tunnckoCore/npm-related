/**
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('is-kindof');
var related = require('helper-related');

module.exports = function npmRelated(names, options, callback) {
  if (!is.array(names) && !is.string(names)) {
    throw new TypeError('[npm-related] expect `names` to be string or array');
  }
  if (is.undefined(options)) {
    throw new Error('[npm-related] expect at least 2 arguments');
  }
  if (is.function(options)) {
    callback = options;
    options = {};
  }
  options = options || {};

  related(options)(names, function _related(err, res) {
    callback(err, res);
  });
};
