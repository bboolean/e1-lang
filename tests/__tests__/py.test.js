const tests = require('./masterTests');

tests(
  'py',
  (name) => `python ${__dirname}/../build/py/${name}.py`
);
