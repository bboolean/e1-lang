const tests = require('./masterTests');

tests(
  'js',
  (name) => `node ${__dirname}/../build/js/${name}.js`
);
