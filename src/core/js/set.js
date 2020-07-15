const core_set = core_curry3((a, b, c) => {
  const path = ('' + a).split('.');

  const lastKey = path[path.length - 1];

  const newObject = Object.assign(
    undefined === c.length ? {} : [],
    c
  );

  let o = newObject;
  // let nc = c;

  // for (let i = 0; i < path.length - 1; i++) {
  //   console.log(o)

  //   o = o[path[i]];
  //   nc = nc[path[i]];

  //   const core_o = Object.assign(undefined === nc.length ? {} : [], nc);
  // }

  o[lastKey] = b;

  return newObject;
});
