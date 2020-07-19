const R = require('ramda');
const { index } = require('picompiler');

const config = require('./picompiler.config.js');

module.exports = (text, lang) => index(text, lang, config);
