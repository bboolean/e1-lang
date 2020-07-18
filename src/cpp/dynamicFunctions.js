const R = require('ramda');

module.exports = (compile) => ({
  core_let: (elems) => {
    const assignments = components.length
      ? R.pipe(
          R.init,
          R.splitEvery(2),
          R.map(
            ([key, value]) =>
              `auto ${key}=${toJs(value)};\n`
          ),
          R.join('')
        )(elems)
      : '';

    const expression = R.last(elems);

    const theReturn =
      elems.length % 2 === 0 ? "''" : toJs(expression);

    return `[=] {\n${assignments} return ${theReturn};\n}();`;
  },
  core_commands: (elems) => {
    const components = R.pipe(
      R.map(compile),
      R.join(';')
    )(elems);

    return `(()=>{\n${components}\n})()`;
  },
  core_function: (elems) => {
    const params = R.pipe(
      R.init,
      R.map((s) => 'auto ' + s),
      R.join(',')
    )(elems);
    const expression = R.last(elems);

    // console.log(components, params, expression);

    return `[=] (${params}) {return ${toJs(expression)};}`;
  },
  core_list: (elems) => {
    return `new Box(vector<Box*>{${R.join(
      ', ',
      R.map(toJs, elems)
    )}})`;
  },
  core_hashmap: (elems) => {
    const components = R.pipe(
      R.tail,
      R.splitEvery(2),
      R.map(([key, value]) => `${key}:${toJs(value)}`),
      R.join(',')
    )(elems);

    return `{${components}}`;
  },
  core_import: (elems) => {
    return `require(${R.join(', ', elems)})`;
  },
  core_readline: (elems) => {
    return `(() => {
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(${compile(R.head(elems))}, (text) => {
  readline.close();

  ${compile(R.last(elems))}(text);
});
})()`;
  },
  core_toNum: (elems) => {
    return `(+${R.join(' ', elems)})`;
  },
  core_if: (elems) => {
    return `(${toJs(elems[0])} ? ${toJs(elems[1])} : ${toJs(
      elems[2]
    )})`;
  },
});
