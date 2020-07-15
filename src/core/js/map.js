const core_map = core_curry2((fn, a) => {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = 'function' === typeof fn ? fn(a[i]) : fn;
  }
  return b;
});
