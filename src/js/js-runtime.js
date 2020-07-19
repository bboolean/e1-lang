const R = require('ramda');
const almondtree = require('almondtree');
const config = require('../picompiler.config');
require('../core/js/add');

const core_curry2 = (fn) => (a, b) =>
  undefined !== b ? fn(a, b) : (b) => fn(a, b);

const core_curry3 = (fn) => (a, b, c) =>
  undefined !== b
    ? undefined !== c
      ? fn(a, b, c)
      : (c) => fn(a, b, c)
    : (b) => fn(a, b);

const _core_add = (...a) => a.reduce((a, v) => a + v);

globalThis.core_all = core_curry2((fn, a) => {
  const filtered = a.filter(fn);

  return a.length === filtered.length;
});

globalThis.core_and = core_curry2((a, b) => a && b);

globalThis.core_any = core_curry2((fn, a) => {
  const filtered = a.filter(fn);

  return filtered.length > 0;
});

globalThis.core_concat = (a, ...b) =>
  b.length
    ? ('' + a).concat(...b)
    : (...b) => ('' + a).concat(...b);

globalThis.core_divide = (a, b) =>
  undefined !== b ? a / b : (b) => b / a;

globalThis.core_equals = core_curry2((a, b) => a === b);

globalThis.core_gt = core_curry2((a, b) => a > b);

globalThis.core_gte = core_curry2((a, b) => a >= b);

globalThis.core_imap = core_curry2((fn, a) => {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = 'function' === typeof fn ? fn(a[i], i) : fn;
  }
  return b;
});

globalThis.core_join = core_curry2((a, b) => b.join(a));

globalThis.core_toString = (a, root) => {
  if ('string' === typeof a) {
    return root ? a : "'" + a + "'";
  } else if ('object' === typeof a && '' + a.length) {
    return (
      '[' + core_join(' ', core_map(core_toString, a)) + ']'
    );
  } else {
    return a;
  }
};

globalThis.core_log = (a) =>
  console.log(core_toString(a, true));

globalThis.core_lt = core_curry2((a, b) => a < b);

globalThis.core_lte = core_curry2((a, b) => a <= b);

globalThis.core_map = core_curry2((fn, a) => {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = 'function' === typeof fn ? fn(a[i]) : fn;
  }
  return b;
});

const _core_multiply = (...a) => a.reduce((a, v) => a * v);

globalThis.core_multiply = (a, ...b) =>
  b.length
    ? _core_multiply(a, ...b)
    : (...b) => _core_multiply(a, ...b);

globalThis.core_or = core_curry2((a, b) => a || b);

const _core_pipe = (b, ...a) => {
  let result = b;
  for (let i = 0; i < a.length; i++) {
    result = a[i](result);
  }
  return result;
};

globalThis.core_pipe = (...a) => {
  if ('function' === typeof a[0]) {
    return (b) => _core_pipe(b, ...a);
  } else {
    return _core_pipe(...a);
  }
};

globalThis.core_range = (a, b, c = 1) => {
  const result = [];
  for (let i = a; i <= b; i += c) {
    result.push(i);
  }
  return result;
};

globalThis.core_remainder = (a, b) =>
  undefined !== b ? a % b : (b) => b % a;

globalThis.core_set = core_curry3((a, b, c) => {
  const path = ('' + a).split('.');

  const lastKey = path[path.length - 1];

  const newObject = Object.assign(
    undefined === c.length ? {} : [],
    c
  );

  let o = newObject;
  // let nc = c;

  // for (let i = 0; i < path.length - 1; i++) {
  //   console.log(o)

  //   o = o[path[i]];
  //   nc = nc[path[i]];

  //   const core_o = Object.assign(undefined === nc.length ? {} : [], nc);
  // }

  o[lastKey] = b;

  return newObject;
});

globalThis.core_splitEvery = core_curry2((a, b) => {
  const result = [];
  let i = 0;
  while (i < b.length) {
    result.push(b.slice(i, (i += a)));
  }
  return result;
});

globalThis.core_subtract = (a, b) =>
  undefined !== b ? a - b : (b) => b - a;

globalThis.core_type = (a) => typeof a;

const dynamicCore = {
  core_let: (elems) => {
    return (function () {
      console.log(elems);
      const assignments = elems.length
        ? R.pipe(
            R.init,
            R.splitEvery(2),
            R.map(([key, value]) => {
              console.log('set' + key + 'to' + value);
              this[key] = compile(value);
            })
          )(elems)
        : '';

      console.log(this);

      const expression = R.last(elems);

      return elems.length % 2 === 0
        ? ''
        : compile(expression);
    })();
  },
  core_commands: (elems) => {
    return (() => {
      R.pipe(R.map(compile))(elems);
    })();
  },
  core_function: (elems) => {
    const params = R.map(compile, R.init(elems));
    const expression = R.last(elems);

    return (...params) => compile(expression);
  },
  core_list: (elems) => {
    const components = R.pipe(R.map(compile))(elems);

    return [...components];
  },
  core_hashmap: (elems) => {
    const components = R.pipe(
      R.splitEvery(2),
      R.map(([key, value]) => `${key}: ${compile(value)}`)
    )(elems);

    return { ...components };
  },
  core_readline: (elems) => {
    return (() => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      readline.question(compile(R.head(elems)), (text) => {
        readline.close();

        compile(R.last(elems))(text);
      });
    })();
  },
  core_toNum: (elems) => {
    return +elems[0];
  },
};

const compile = (params) => {
  if ('Array' === R.type(params)) {
    const fnName = R.head(params);
    const elems = R.tail(params);

    if (dynamicCore[fnName]) {
      return dynamicCore[fnName](elems);
    } else if (globalThis[fnName]) {
      return globalThis[fnName](...R.map(compile, elems));
    }
  } else {
    // console.log(params);

    if (R.test(/^[\d\.-]+$/, params)) {
      return +params;
    } else if (
      `'` === R.head(params || '') &&
      `'` === R.last(params || '')
    ) {
      return params;
    } else {
      this[params];
    }
  }
};

const text = `


fn (# x (+ x 3))

(fn 100)



`;

const ast = almondtree(`(let ${text})`, config);

console.log(ast);

const main = compile(ast);

if (!['undefined', 'function'].includes(typeof main)) {
  core_log(main);
}
