const R = require('ramda');
const tokens = require('./tokens');

const js = require('./js/index');
const py = require('./py/index');

module.exports = {
  tokens,
  fileExtension: 'e1',
  languages: {
    js,
    py,
  },
  corePath: __dirname + '/core',
  configName: 'e1-lang.config.js',
};
