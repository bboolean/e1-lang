const core_all = core_curry2((fn, a) => {
  const filtered = a.filter(fn);

  return a.length === filtered.length;
});
