def core_log(a):
  if (type(a) is int):
    print(a)
  elif (type(a) is bool):
    print('true' if a else 'false')
  else:
    print(a)
