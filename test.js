/**
 * npm-related <https://github.com/tunnckoCore/npm-related>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var npmRelated = require('./index');

describe('npm-related', function () {
  it('should throw an TypeError when no arguments', function () {
    assert.throws(function _throws() {
      npmRelated();
    }, TypeError);
  });

  it('should throw an Error when no second argument given', function () {
    assert.throws(function _throws() {
      npmRelated([1, 2, 3]);
    }, Error);
  });

  it('should return formatted markdown list for single package', function(done) {
    this.timeout(30000);

    npmRelated('verb', function (err, res) {
      assert.ifError(err);
      assert.strictEqual(/\[verb\]/.test(res), true);
      done();
    });
  });

  it('should return formatted list for multiple given packages', function (done) {
    this.timeout(30000);

    npmRelated(['remarkable', 'micromatch'], function (err, res) {
      assert.ifError(err);
      assert.strictEqual(/\[remarkable\]/.test(res), true);
      assert.strictEqual(/\[micromatch\]/.test(res), true);
      done();
    });
  });

  it('should pass options to `helper-related`', function (done) {
    this.timeout(30000);

    npmRelated(['verb', 'assemble'], {linkify: false}, function (err, res) {
      assert.ifError(err);
      assert.strictEqual(/\[verb\]/.test(res), true);
      done();
    });
  });
});
