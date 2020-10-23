# egg-xml-body

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-xml-body.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-xml-body
[travis-image]: https://img.shields.io/travis/eggjs/egg-xml-body.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-xml-body
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-xml-body.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-xml-body?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-xml-body.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-xml-body
[snyk-image]: https://snyk.io/test/npm/egg-xml-body/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-xml-body
[download-image]: https://img.shields.io/npm/dm/egg-xml-body.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-xml-body

<!--
Description here.
-->

## Install

```bash
$ npm i egg-xml-body --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.xmlBodyParser = {
  enable: true,
  package: 'egg-xml-body',
};
```

## Configuration

egg-xml-body support all the configurations in [koa-xml-body](https://www.npmjs.com/package/koa-xml-body). and with default configurations below:

- encoding: 'utf8'
- limit: '1mb' 
- key: 'body'
- xmlOptions: {}, see the [xml2js options](https://github.com/Leonidas-from-XIV/node-xml2js#options) for detail

```js
// {app_root}/config/config.default.js
exports.xmlBodyParser = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
