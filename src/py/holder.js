module.exports = (
  text,
  core,
  almondtree,
  compile,
  tokens,
  dynamicCore
) => {
  const ast = almondtree(
    `(let program (let ${text}) (if program (log program) program ''))`,
    { tokens }
  );

  const main = compile(ast, dynamicCore);

  return `import types
  
curry2 = lambda fn : (
  lambda a, b=None : (
    (lambda b : fn(a, b)) if None == b else fn(a, b)
  )
)

${core}

${main}`;
};
