const _core_add = (...a) => a.reduce((a, v) => a + v);
const core_add = (a, ...b) =>
  b.length
    ? core_add(a, ...b)
    : (...b) => core_add(a, ...b);
