def _core_all(fn, a):
  return len(list(filter(fn, a))) == len(a)
core_all = curry2(_core_all)
