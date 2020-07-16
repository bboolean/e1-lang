def core_type(a):
  if (type(a) is float):
    return 'num'
  if (type(a) is int):
    return 'num'
  elif (type(a) is bool):
    return 'bool'
  elif (type(a) is str):
    return 'string'
  elif (type(a) is list):
    return 'list'
  else:
    return 'unknown'
