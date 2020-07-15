const _core_add = (...a) => a.reduce((a, v) => a + v);

const core_add = (a, ...b) =>
  b.length
    ? _core_add(a, ...b)
    : (...b) => _core_add(a, ...b);
