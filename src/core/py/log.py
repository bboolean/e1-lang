core_str = lambda a, root : core_toString(a, root)

def ident(a):
  return a

def core_toString(a, root = False):
  if (type(a) is float):
    return str(int(a) if a == int(a) else a)
  if (type(a) is int):
    return str(a)
  elif (type(a) is bool):
    return 'true' if a else 'false'
  elif (type(a) is str):
    return a if root else "'"+a+"'"
  elif (type(a) is list):
    return '[' + core_join(' ', core_map(core_toString, a)) + ']'
  else:
    return a

def core_log(a):
  print(core_toString(a, True))
