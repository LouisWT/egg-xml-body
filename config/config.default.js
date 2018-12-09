'use strict';

/**
 * egg-xml-body default config
 * @member Config#xmlBody
 * @property {String} encoding - request encoding
 * @property {String} limit - limit of the body
 * @property {String} key redefine what the property name to use instead of the default body, ctx.request.body
 * @property {Object} xmlOptions see the xml2js options for detail
 */
exports.xmlBody = {
  encoding: 'utf8',
  limit: '1mb',
  key: 'body',
  xmlOptions: {},
};
