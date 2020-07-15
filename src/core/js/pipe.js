const _core_pipe = (b, ...a) => {
  let result = b;
  for (let i = 0; i < a.length; i++) {
    result = a[i](result);
  }
  return result;
};

const core_pipe = (...a) => {
  if ('function' === typeof a[0]) {
    return (b) => _core_pipe(b, ...a);
  } else {
    return _core_pipe(...a);
  }
};
