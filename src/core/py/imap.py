def _core_imap(fn, a):
  b = []
  for i in range(0, len(a)):
    b.append(fn(a[i], i))
  
  return b

core_imap = curry2(_core_imap)
