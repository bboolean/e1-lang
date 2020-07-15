module.exports = (
  text,
  core,
  almondtree,
  compile,
  tokens,
  dynamicCore
) => {
  const ast = almondtree(`(let ${text})`, { tokens });

  const main = compile(ast, dynamicCore);

  return `const readline = require("readline").createInterface({
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
  console.log(main);
}`;
};
