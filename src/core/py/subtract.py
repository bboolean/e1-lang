core_subtract = lambda a, b=None : (
  a - b if b else (lambda b : b - a)
)
