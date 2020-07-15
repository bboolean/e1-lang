core_divide = lambda a, b=None : (
  a / b if b else (lambda b : b / a)
)
