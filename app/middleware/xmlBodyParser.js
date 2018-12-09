'use strict';

const xmlParser = require('koa-xml-body');

module.exports = options => {
  return xmlParser(options);
};
