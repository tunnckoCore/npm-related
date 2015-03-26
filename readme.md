## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Thin wrapper on top of `helper-related` for generating a list of links to the homepages of related NPM projects.

## Install
```
npm i --save npm-related
npm test
npm-related --help
```


## API
> For more use-cases see the [tests](./test.js)

### [npmRelated](./index.js#L23)
> Generating a list of markdown links to the homepages of related NPM projects.

- `<names>` **{Array|String}** name(s) of the wanted npm package(s)
- `[options]` **{Object}** options to pass to [helper-related] or `callback`
- `callback` **{Function}** node-style callback function `(err, res)`

**Example**
```js
var npmRelated = require('npm-related');

npmRelated(['verb', 'utils'], function callback(err, res) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(res);
  //=> list of markdown links
});
```


## CLI
> run `npm-related --help` or try this one, which will output links
to the gulp, mocha and koa project's homepage

```
npm i -g npm-related
npm-related gulp mocha koa

- [gulp](http://gulpjs.com): The streaming build system
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [koa](https://github.com/koajs/koa): Koa web app framework

```


## Related
- [helper-related](https://github.com/helpers/helper-related): Template helper for generating a list of links to the homepages of related GitHub/npm projects.
- [utils](https://github.com/jonschlinkert/utils): Fast, generic JavaScript/node.js utility functions.
- [chalk](https://github.com/sindresorhus/chalk): Terminal string styling done right. Much color.
- [gitclone](https://github.com/tunnckoCore/gitclone): Clone a Github repository with only `username/repo`. Support CLI and Promise.
- [kind-of](https://github.com/jonschlinkert/kind-of): Get the native type of a value.
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Thin wrapper around `kind-of` and in bonus functional api.
- [meow](https://github.com/sindresorhus/meow): CLI app helper
- [npmls](https://github.com/tunnckoCore/npmls): Streaming list of installed node modules. More compact and small. Support N and NVM version managers.


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/npm-related
[npmjs-img]: https://img.shields.io/npm/v/npm-related.svg?style=flat&label=npm-related

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npm-related?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npm-related.svg?style=flat

[license-url]: https://github.com/tunnckoCore/npm-related/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/npm-related
[travis-img]: https://img.shields.io/travis/tunnckoCore/npm-related.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/npm-related
[daviddm-img]: https://img.shields.io/david/tunnckoCore/npm-related.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/npm-related/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 26, 2015_

[helper-related]: https://github.com/helpers/helper-related