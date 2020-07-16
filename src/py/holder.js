module.exports = (
  text,
  core,
  almondtree,
  compile,
  config,
  lang
) => {
  const ast = almondtree(
    `(let program (let ${text}) program)`,
    config
  );

  const main = compile(ast, config.languages[lang]);

  return `import types
  
curry2 = lambda fn : (
  lambda a, b=None : (
    (lambda b : fn(a, b)) if None == b else fn(a, b)
  )
)

${core}

${main}

if None != program:
  core_log(program)`;
};
