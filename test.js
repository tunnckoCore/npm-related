/*!
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var related = require('./index')

test('should get a package.json from npm:', function (done) {
  related('micromatch', function (err, res) {
    test.ifError(err)
    test.strictEqual(/\[micromatch\]/.test(res), true)
    done()
  })
})

test('should get an array of package.json files:', function (done) {
  related(['micromatch', 'assemble'], function (err, res) {
    test.ifError(err)
    test.strictEqual(/\[micromatch\]/.test(res), true)
    test.strictEqual(/\[assemble\]/.test(res), true)
    done()
  })
})

test('should remove a name passed on `options.remove`:', function (done) {
  var list = ['assemble', 'verb', 'remarkable', 'snippet']
  related(list, {remove: 'remarkable'}, function (err, res) {
    test.ifError(err)
    test.strictEqual(/\[assemble\]/.test(res), true)
    test.strictEqual(/\[remarkable\]/.test(res), false)
    test.strictEqual(/\[verb\]/.test(res), true)
    test.strictEqual(/\[snippet\]/.test(res), true)
    done()
  })
})

test('should remove a name passed on `options.remove`:', function (done) {
  var list = ['assemble', 'verb', 'remarkable', 'snippet']
  related(list, {remove: ['remarkable', 'verb']}, function (err, res) {
    test.ifError(err)
    test.strictEqual(/\[assemble\]/.test(res), true)
    test.strictEqual(/\[remarkable\]/.test(res), false)
    test.strictEqual(/\[verb\]/.test(res), false)
    test.strictEqual(/\[snippet\]/.test(res), true)
    done()
  })
})

