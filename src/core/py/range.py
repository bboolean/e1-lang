def core_range(a, b, c = 1):
  result = []
  i = a
  while i <= b:
    result.append(i)
    i += c
  
  return result
