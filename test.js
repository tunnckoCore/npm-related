/*!
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var npmRelated = require('./index')

test('npm-related:', function () {
  test('should throw TypeError when no arguments', function (done) {
    function fixture () {
      npmRelated()
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /npm-related: expect `names` to be string or array/)
    done()
  })
  test('should throw Error if no callback', function (done) {
    function fixture () {
      npmRelated(['vez', 'benz', 'verb'])
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /npm-related: expect callback/)
    done()
  })
  test('should return formatted markdown list for single package', function (done) {
    npmRelated('verb', function (err, res) {
      test.ifError(err)
      test.equal(/\[verb\]/.test(res), true)
      done()
    })
  })
  test('should return formatted list for multiple given packages', function (done) {
    npmRelated(['remarkable', 'micromatch'], function (err, res) {
      test.ifError(err)
      test.equal(/\[remarkable\]/.test(res), true)
      test.equal(/\[micromatch\]/.test(res), true)
      done()
    })
  })
  test('should pass options to `helper-related`', function (done) {
    npmRelated(['verb', 'assemble'], {linkify: false}, function (err, res) {
      test.ifError(err)
      test.equal(/\[verb\]/.test(res), true)
      done()
    })
  })
  test('should remove a name passed on `options.remove`:', function (done) {
    var list = [
      'promise2thunk',
      'always-callback',
      'make-callback',
      'ip-filter'
    ]

    npmRelated(list, {remove: 'make-callback'}, function (err, res) {
      test.ifError(err)
      test.equal(/\[promise2thunk\]/.test(res), true)
      test.equal(/\[make-callback\]/.test(res), false)
      test.equal(/\[always-callback\]/.test(res), true)
      test.equal(/\[ip-filter\]/.test(res), true)
      done()
    })
  })
  test('should truncate description to 15 words by default', function (done) {
    npmRelated(['is-es6-generators', 'always-callback'], function (err, res) {
      test.ifError(err)
      test.equal(res, [
        '* [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no… [more](https://github.com/tunnckocore/always-callback)',
        '* [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a `Generator` or `GeneratorFunction`. The `co` way, more strict checking.… [more](https://github.com/tunnckocore/is-es6-generators)'
      ].join('\n'))
      done()
    })
  })
  test('should truncate the description to the given number of words:', function (done) {
    npmRelated(['always-callback', 'ip-filter'], {words: 10}, function (err, res) {
      test.ifError(err)
      test.equal(res, [
        '* [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given… [more](https://github.com/tunnckocore/always-callback)',
        '* [ip-filter](https://github.com/tunnckocore/ip-filter): Filter valid IPv4 or IPv6 IP against glob pattern, array,… [more](https://github.com/tunnckocore/ip-filter)'
      ].join('\n'))
      done()
    })
  })
  test('should truncate description to 15 when truncate:true', function (done) {
    npmRelated(['is-es6-generators', 'always-callback'], {truncate: true}, function (err, res) {
      test.ifError(err)
      test.equal(res, [
        '* [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no… [more](https://github.com/tunnckocore/always-callback)',
        '* [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a `Generator` or `GeneratorFunction`. The `co` way, more strict checking.… [more](https://github.com/tunnckocore/is-es6-generators)'
      ].join('\n'))
      done()
    })
  })
  test('should not truncate description when truncate:false', function (done) {
    npmRelated(['micromatch', 'assemble'], {truncate: false}, function (err, res) {
      test.ifError(err)
      test.equal(res, [
        '* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt, Less.js / lesscss.org, Topcoat, Web Experience Toolkit, and hundreds of other projects to build sites, themes, components, documentation, blogs and gh',
        '* [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just use `micromatch.isMatch()` instead of `minimatch()`, or use `micromatch()` instead of `multimatch()`.'
      ].join('\n'))
      done()
    })
  })
})
