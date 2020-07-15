const { exec } = require('child_process');

const run = (name, text, done) => {
  exec(
    `python ${__dirname}/../build/py/${name}.py`,
    (error, stdout, stderr) => {
      if (error || stderr) {
        console.error(`exec error: ${error}`);
        console.error(`stderr: ${stderr}`);
      }

      expect(stdout).toBe(text + '\n');

      done();
    }
  );
};

test('add', (done) => {
  run('add', '12\n7', done);
});

test('concat', (done) => {
  run('concat', 'Thisisa100test', done);
});

test('gt', (done) => {
  run('gt', 'true\nfalse', done);
});

test('gte', (done) => {
  run('gte', 'true\nfalse', done);
});

test('lt', (done) => {
  run('lt', 'true\nfalse', done);
});

test('lte', (done) => {
  run('lte', 'true\nfalse', done);
});

test('or', (done) => {
  run('or', 'true\ntrue\ntrue\nfalse', done);
});

test('set', (done) => {
  run('set', `[ 'this', 'was', 'a', 'test' ]`, done);
});

test('all', (done) => {
  run('all', 'true\nfalse', done);
});

test('divide', (done) => {
  run('divide', '2\n6', done);
});

// test('imap', (done) => {
//   run('imap', `[ 'this0', 'is1', 'a2', 'test3' ]`, done);
// });

test('pipe', (done) => {
  run('pipe', '101', done);
});

test('splitEvery', (done) => {
  run(
    'splitEvery',
    '[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]',
    done
  );
});

test('equals', (done) => {
  run('equals', 'false\ntrue', done);
});

test('and', (done) => {
  run('and', 'true\nfalse\nfalse\nfalse', done);
});

test('join', (done) => {
  run('join', '1-2-3', done);
});

test('map', (done) => {
  run('map', '[ 101, 102, 103 ]', done);
});

test('range', (done) => {
  run(
    'range',
    `[
    1, 1.5,   2, 2.5,   3, 3.5,   4,
  4.5,   5, 5.5,   6, 6.5,   7, 7.5,
    8, 8.5,   9, 9.5,  10
]`,
    done
  );
});

test('subtract', (done) => {
  run('subtract', '8\n1', done);
});

test('any', (done) => {
  run('any', 'true\nfalse', done);
});

test('log', (done) => {
  run('log', 'Hello!', done);
});
test('multiply', (done) => {
  run('multiply', '24', done);
});

test('remainder', (done) => {
  run('remainder', '0', done);
});

test('type', (done) => {
  run('type', 'string', done);
});
