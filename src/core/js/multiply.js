const _core_multiply = (...a) => a.reduce((a, v) => a * v);

const core_multiply = (a, ...b) =>
  b.length
    ? _core_multiply(a, ...b)
    : (...b) => _core_multiply(a, ...b);
