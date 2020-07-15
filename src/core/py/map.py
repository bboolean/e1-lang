def _core_map(fn, a):
  result = []
  for i in range(0, len(a)):
    if isinstance(fn, types.LambdaType):
      print(fn)
      print(a[i])
      result.append(fn(a[i]))
    else:
      result.append(fn)
  
  return result

core_map = curry2(_core_map)
