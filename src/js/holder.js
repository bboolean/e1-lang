module.exports = (
  text,
  core,
  almondtree,
  compile,
  config
) => {
  const ast = almondtree(`(let ${text})`, config);

  const main = compile(ast, config.languages.js);

  return `const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const core_curry2 = (fn) => (a, b) =>
  undefined !== b ? fn(a, b) : (b) => fn(a, b);

const core_curry3 = (fn) => (a, b, c) =>
  undefined !== b
    ? undefined !== c
      ? fn(a, b, c)
      : (c) => fn(a, b, c)
    : (b) => fn(a, b);
  
${core}

const main = ${main};

if (!['undefined', 'function'].includes(typeof main)) {
  core_log(main);
}`;
};
