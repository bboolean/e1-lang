const tests = require('./masterTests');

tests(
  (name) => `python ${__dirname}/../build/py/${name}.py`
);
