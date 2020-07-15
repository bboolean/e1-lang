def _core_splitEvery(a, b):
  result = []
  i = 0
  while (i < len(b)):
    oi = i
    i += a
    result.append(b[slice(oi,i)])
  return result

core_splitEvery = curry2(_core_splitEvery)
