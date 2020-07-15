const R = require('ramda');
const tokens = require('./tokens');

const js = require('./js/index');

module.exports = {
  tokens,
  fileExtension: 'e1',
  languages: {
    js,
  },
  corePath: __dirname + '/core',
  configName: 'e1-lang.config.js',
};
