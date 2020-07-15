def _core_pipe(a, *fn):
  result = a
  for i in range(0, len(fn)):
    result = fn[i](result)
  
  return result

def core_pipe(*p):
  if isinstance(p[0], types.LambdaType):
    return lambda a : _core_pipe(a, *p)
  else:
    return _core_pipe(*p)
