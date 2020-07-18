const R = require('ramda');
const tokens = require('./tokens');

const js = require('./js/index');
const py = require('./py/index');
const cpp = require('./cpp/index');

module.exports = {
  tokens,
  fileExtension: 'e1',
  languages: {
    js,
    py,
    cpp,
  },
  corePath: __dirname + '/core',
  configName: 'e1-lang.config.js',
};
