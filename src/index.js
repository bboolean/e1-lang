const R = require('ramda');
const { picompiler } = require('picompiler');

const config = require('./picompiler.config.js');

module.exports = (text, lang) =>
  picompiler(text, lang, config);
