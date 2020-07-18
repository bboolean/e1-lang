const R = require('ramda');

module.exports = [
  [R.equals('true'), R.always('True')],
  [R.equals('false'), R.always('False')],
];
