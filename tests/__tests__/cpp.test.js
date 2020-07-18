const tests = require('./masterTests');

tests('py', (name) => {
  const path = `${__dirname}/../build/cpp/${name}`;

  return `g++ -std=gnu++17 -fconcepts-ts ${path}.cpp -o ${path} && ${path}`;
});
