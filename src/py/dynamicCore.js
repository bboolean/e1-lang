const R = require('ramda');

let itest = 0;
const newNum = () => {
  return 'fn__' + itest++;
};

const ilast = (a, b) => {
  const t = b.split('\n');
  const f = R.join('\n', R.init(t));
  const l = R.last(t);

  return `${f}\n${a}${l}`;
};

module.exports = (compile) => ({
  core_let: (elems) => {
    const dfg = elems.length
      ? R.pipe(R.init, R.splitEvery(2))(elems)
      : '';

    const keys = R.pipe(
      R.map(([a, b]) => {
        if ('#' === b[0]) {
          return compile(b, a);
        } else {
          return ilast(`${a} = `, compile(b));
        }
      }),
      R.join('\n')
    )(dfg);

    const expression = R.last(elems);

    const theReturn =
      elems.length % 2 === 0 ? "''" : compile(expression);

    return `${keys}\n${theReturn}`;
  },
  core_commands: (elems) => {
    const components = R.pipe(
      R.map(compile),
      R.join(';')
    )(elems);

    return `${components};`;
  },
  core_function: (elems) => {
    const params = R.init(elems);
    const expression = R.pipe(
      R.last,
      toJs,
      R.split('\n'),
      R.ifElse(
        (x) => 1 === R.length(x),
        (x) => ['  ' + x[0]],
        R.map((x) => '  ' + x)
      ),
      R.join('\n')
    )(elems);

    // console.log(components, params, expression);

    // console.log(expression);

    const p = expression.split('\n');
    const defs = R.join('\n', R.init(p));
    const last = '  return' + R.last(p);

    const r = newNum();

    return `def ${sec || r}(${R.join(
      ', ',
      params
    )}): \n${defs}\n${last}\n${sec ? '' : `${r}`}`;
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
  core_if: (elems) => {
    return `(${compile(elems[2])} if ${compile(
      elems[1]
    )} else ${compile(elems[3])})`;
  },
});
