const core_concat = (a, ...b) =>
  b.length
    ? ('' + a).concat(...b)
    : (...b) => ('' + a).concat(...b);
