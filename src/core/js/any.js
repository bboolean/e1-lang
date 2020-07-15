const core_any = core_curry2((fn, a) => {
  const filtered = a.filter(fn);

  return filtered.length > 0;
});
