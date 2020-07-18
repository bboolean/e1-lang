module.exports = (
  text,
  core,
  almondtree,
  compile,
  config
) => {
  const ast = almondtree(`(let ${text})`, config);

  const main = compile(ast, config.languages.js);

  return `${core}

int main() { 
  auto mainprogram = ${main};
  log(mainprogram);
  return 0; 
}`;
};
