const R = require('ramda');

module.exports = [
  [
    (a) =>
      (a && (a[0] === '"' || a[0] === `'`)) ||
      /[\d.]+/.test(a),
    (a) => `new Box(${a.replace(/'/g, '"')})`,
  ],
  [R.equals('true'), R.always('new Box(true, true)')],
  [R.equals('false'), R.always('new Box(false, true)')],
];
