/*!
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var related = require('helper-related')

/**
 * Generating a list of markdown links to the
 * homepages of related NPM projects.
 *
 * @name   npmRelated
 * @param  {Array|String} `<names>` name(s) of the wanted npm package(s)
 * @param  {Object} `[options]` options to pass to [helper-related] or `callback`
 * @param  {Function} `<callback>` node-style callback function `(err, res)`
 * @api public
 */

module.exports = function npmRelated (names, options, callback) {
  if (!Array.isArray(names) && typeof names !== 'string') {
    throw new TypeError('npm-related: expect `names` to be string or array')
  }
  callback = typeof options === 'function' ? options : callback
  options = typeof options === 'object' ? options : {}

  if (typeof callback !== 'function') {
    throw new TypeError('npm-related: expect callback')
  }

  return related(options)(names, callback)
}
