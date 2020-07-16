const core_toString = (a, root) => {
  if ('string' === typeof a) {
    return root ? a : "'" + a + "'";
  } else if ('object' === typeof a && '' + a.length) {
    return (
      '[' + core_join(' ', core_map(core_toString, a)) + ']'
    );
  } else {
    return a;
  }
};

const core_log = (a) => console.log(core_toString(a, true));
