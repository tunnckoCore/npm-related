# [npm-related][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Command-line app for generating a list of markdown links to the homepages of related npm/github projects. Can be used as API of `helper-related` package.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i npm-related --save
npm test
```

## API
### [npmRelated](./index.js#L23)
> Generating a list of markdown links to the homepages of related NPM projects.

**Params**

- `<names>` **{Array|String}** name(s) of the wanted npm package(s)
- `[options]` **{Object}** options to pass to [helper-related] or `callback`
- `<callback>` **{Function}** node-style callback function `(err, res)`

**Example**

```js
var npmRelated = require('npm-related')

npmRelated(['verb', 'utils'], function (err, res) {
  if (err) {
    console.error(err.message)
    return
  }
  console.log(res)
  //=> list of markdown links
})
```


## CLI
> run `npm-related --help` or try this one, which will output links
to the assemble, remarkable and template project's homepage

```
npm i -g npm-related
npm-related vez benz verb --words 10

- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks,… [more](https://github.com/tunnckocore/benz)
- [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use,… [more](https://github.com/assemble/verb)
- [vez](https://github.com/tunnckocore/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`,… [more](https://github.com/tunnckocore/vez)

```


## Related
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Command-line app for generating API docs from code comments… [more](https://github.com/tunnckocore/apidocs-cli)
- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks,… [more](https://github.com/tunnckocore/benz)
- [composer](https://github.com/jonschlinkert/composer): Boilerplate for creating a node.js application based on Template, vinyl… [more](https://github.com/jonschlinkert/composer)
- [detect-installed](https://github.com/tunnckocore/detect-installed): Checks that given package name is installed locally or globally.… [more](https://github.com/tunnckocore/detect-installed)
- [generate](https://github.com/generate/generate): Project generator, for node.js.
- [gitclone](https://github.com/tunnckoCore/gitclone): Clone a Github repository with only `username/repo`. Support CLI and… [more](https://github.com/tunnckoCore/gitclone)
- [helper-related](https://github.com/helpers/helper-related): Template helper for generating a list of links to the… [more](https://github.com/helpers/helper-related)
- [npm-pkgs-filter](https://github.com/tunnckoCore/npm-pkgs-filter): Filter the list of user npm packages from the [npmjs.com](https://npmjs.com)… [more](https://github.com/tunnckoCore/npm-pkgs-filter)
- [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use,… [more](https://github.com/assemble/verb)
- [vez](https://github.com/tunnckocore/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`,… [more](https://github.com/tunnckocore/vez)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/npm-related/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/npm-related
[npmjs-img]: https://img.shields.io/npm/v/npm-related.svg?label=npm-related

[license-url]: https://github.com/tunnckoCore/npm-related/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/npm-related
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/npm-related.svg

[travis-url]: https://travis-ci.org/tunnckoCore/npm-related
[travis-img]: https://img.shields.io/travis/tunnckoCore/npm-related.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npm-related
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npm-related.svg

[david-url]: https://david-dm.org/tunnckoCore/npm-related
[david-img]: https://img.shields.io/david/tunnckoCore/npm-related.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
