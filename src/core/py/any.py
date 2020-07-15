def _core_any(fn, a):
  return len(list(filter(fn, a))) > 0

core_any = curry2(_core_any)
