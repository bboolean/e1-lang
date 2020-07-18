const R = require('ramda');

module.exports = [
  [
    (a) =>
      (a && (a[0] === '"' || a[0] === `'`)) ||
      /[\d.]+/.test(a),
    (a) => `make_shared<Box>(${a.replace(/'/g, '"')})`,
  ],
  [
    R.equals('true'),
    R.always('make_shared<Box>(true, true)'),
  ],
  [
    R.equals('false'),
    R.always('make_shared<Box>(false, true)'),
  ],
];
