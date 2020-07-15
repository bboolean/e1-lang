def core_set(a, b, c):
  result = c.copy()

  try:
    result[a] = b
  except:
    0

  return result
