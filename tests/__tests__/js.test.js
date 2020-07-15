const tests = require('./masterTests');

tests((name) => `node ${__dirname}/../build/js/${name}.js`);
