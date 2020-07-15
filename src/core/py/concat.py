def _core_concat(a, *b):
  if isinstance(a, list):
    return [a, *b]
  else:
    return core_join('', [a, *b])

def core_concat(a, *b):
  if len(b):
    return _core_concat(a, *b)
  else:
    return lambda *b : _core_concat(a, *b)
