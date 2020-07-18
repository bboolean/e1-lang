const R = require('ramda');

module.exports = (compile) => ({
  core_let: (elems) => {
    const assignments = elems.length
      ? R.pipe(
          R.init,
          R.splitEvery(2),
          R.map(
            ([key, value]) => `${key} = ${compile(value)};`
          ),
          R.join(' ')
        )(elems)
      : '';

    const expression = R.last(elems);

    const theReturn =
      elems.length % 2 === 0 ? "''" : compile(expression);

    return `(()=1>{\n${assignments}\nreturn ${theReturn};\n})()`;
  },
  core_commands: (elems) => {
    const components = R.pipe(
      R.map(compile),
      R.join(';')
    )(elems);

    return `(()=>{\n${components}\n})()`;
  },
  core_function: (elems) => {
    const params = R.init(elems);
    const expression = R.last(elems);

    return `(${R.join(', ', params)}) => ${compile(
      expression
    )}`;
  },
  core_list: (elems) => {
    const components = R.pipe(
      R.map(compile),
      R.join(', ')
    )(elems);

    return `[${components}]`;
  },
  core_hashmap: (elems) => {
    const components = R.pipe(
      R.splitEvery(2),
      R.map(([key, value]) => `${key}: ${compile(value)}`),
      R.join(', ')
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
});
