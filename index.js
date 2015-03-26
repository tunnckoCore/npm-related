/**
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('is-kindof');
var related = require('helper-related');

/**
 * Generating a list of markdown links to the homepages
 * of related NPM projects.
 *
 * @name   npmRelated
 * @param  {Array|String}   `<names>` name(s) of the wanted npm package(s)
 * @param  {Object}         `[options]` options to pass to [helper-related] or `callback`
 * @param  {Function}       `callback` node-style callback function `(err, res)`
 * @api public
 */
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

  return related(options)(names, function _related(err, res) {
    callback(err, res);
  });
};
