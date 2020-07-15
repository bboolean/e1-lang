const core_imap = core_curry2((fn, a) => {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = 'function' === typeof fn ? fn(a[i], i) : fn;
  }
  return b;
});
