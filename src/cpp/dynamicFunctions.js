const R = require('ramda');

module.exports = (compile) => ({
  core_let: (elems) => {
    const assignments = elems.length
      ? R.pipe(
          R.init,
          R.splitEvery(2),
          R.map(
            ([key, value]) =>
              `auto ${key}=${compile(value)};\n`
          ),
          R.join('')
        )(elems)
      : '';

    const expression = R.last(elems);

    const theReturn =
      elems.length % 2 === 0 ? "''" : compile(expression);

    return `[=] {\n${assignments} return ${theReturn};\n}();`;
  },
  core_commands: (elems) => {
    const components = R.pipe(
      R.map(compile),
      R.join(';')
    )(elems);

    return `[=] {\n${components};\n}();`;
  },
  core_function: (elems) => {
    const params = R.pipe(
      R.init,
      R.map((s) => 'auto ' + s),
      R.join(',')
    )(elems);
    const expression = R.last(elems);

    // console.log(components, params, expression);

    return `[=] (${params}) {return ${compile(
      expression
    )};}`;
  },
  core_list: (elems) => {
    return `new Box(vector<Box*>{${R.join(
      ', ',
      R.map(compile, elems)
    )}})`;
  },
  core_hashmap: (elems) => {
    const components = R.pipe(
      R.tail,
      R.splitEvery(2),
      R.map(([key, value]) => `${key}:${compile(value)}`),
      R.join(',')
    )(elems);

    return `{${components}}`;
  },
  core_import: (elems) => {
    return `require(${R.join(', ', elems)})`;
  },
  core_toNum: (elems) => {
    return `(+${R.join(' ', elems)})`;
  },
  core_if: (elems) => {
    return `(${compile(elems[0])} ? ${compile(
      elems[1]
    )} : ${compile(elems[2])})`;
  },
});
