const R = require('ramda');

module.exports = [
  [
    (a) =>
      (a && (a[0] === '"' || a[0] === `'`)) ||
      /[\d.]+/.test(a),
    (a) => `new Box(${a.replace(/'/g, '"')})`,
  ],
];
