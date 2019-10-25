# JS HTTP Status

[![Travis CI][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![NPM Version][npm-version-badge]][npm-url]
![NPM Downloads][npm-download-url]
[![Commitizen][commitizen-badge]][commitizen-url]
[![License][license-badge]][license-url]

> A simple way to catch HTTP statuses with JavaScript.

## Installation

js-http-status is available on npm/yarn:

```bash
$ npm install js-http-status --save
$ yarn add js-http-status
```

## Usage

With ES6/import

```js
import {
  findStatusByCode,
  findStatusByKey,
  isCreated,
  isOk
} from 'js-http-status';

findStatusByCode(200);
// => { code: 200, key: 'OK', message: 'OK', category: 'SUCCESS' }

findStatusByKey('TOO_MANY_REQUESTS');
// => { code: 429, key: 'TOO_MANY_REQUESTS', message: 'Too Many Requests', category: 'CLIENT_ERROR' }

isCreated(201); // => true
isCreated(500); // => HTTPStatusError: Expected a 201 response.
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

This project adheres to [Semantic Versioning](https://semver.org/). Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/codevor/js-http-status/releases) page.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/codevor/js-http-status/issues).

## References

- [HTTP Statuses](https://httpstatuses.com/);

## License

[MIT License](LICENSE) © [Codevor](https://github.com/codevor)

[license-badge]: https://img.shields.io/github/license/codevor/js-http-status.svg
[license-url]: https://opensource.org/licenses/MIT
[coverage-badge]: https://coveralls.io/repos/github/codevor/js-http-status/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/codevor/js-http-status?branch=master
[travis-badge]: https://travis-ci.org/codevor/js-http-status.svg?branch=master
[travis-url]: https://travis-ci.org/codevor/js-http-status
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[npm-version-badge]: https://badge.fury.io/js/js-http-status.svg
[npm-url]: https://npmjs.org/package/js-http-status
[npm-download-url]: https://img.shields.io/npm/dw/js-http-status
