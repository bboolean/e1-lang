module.exports = [
  {
    value: '(',
  },
  {
    value: ')',
  },
  {
    // numbers
    value: /^[\d\._]+$/,
  },
  {
    // identifiers
    value: /^[0-9a-zA-Z_\.]+$/,
  },
  {
    // single quote strings
    value: /^'[^']*'?$/,
  },
  {
    // double quote strings
    value: /^"[^"]*"?$/,
  },
  {
    // comments
    value: /^\n? *;.*\n?$/,
  },
  {
    value: '[',
    replace: ['(', 'core_list'],
  },
  {
    value: ']',
    replace: ')',
  },
  {
    value: '{',
    replace: ['(', 'core_hashmap'],
  },
  {
    value: '}',
    replace: ')',
  },

  { value: '||', replace: 'core_or' },
  { value: '|', replace: 'core_pipe' },
  { value: '-', replace: 'core_subtract' },
  { value: '*', replace: 'core_multiply' },
  { value: '+', replace: 'core_add' },
  { value: '/', replace: 'core_divide' },
  { value: '>', replace: 'core_gt' },
  { value: '<', replace: 'core_lt' },
  { value: '>=', replace: 'core_gte' },
  { value: '<=', replace: 'core_lte' },
  { value: '++', replace: 'core_concat' },
  { value: '=', replace: 'core_equals' },
  { value: '%', replace: 'core_remainder' },
  { value: '&', replace: 'core_and' },
  { value: '#', replace: 'core_function' },
  { value: '$', replace: 'core_commands' },

  { value: 'splitEvery', isCore: true },
  { value: 'join', isCore: true },
  { value: 'all', isCore: true },
  { value: 'any', isCore: true },
  { value: 'set', isCore: true },
  { value: 'map', isCore: true },
  { value: 'imap', isCore: true },
  { value: 'type', isCore: true },
  { value: 'range', isCore: true },
  { value: 'let', isCore: true },
  { value: 'if', isCore: true },
  { value: 'log', isCore: true },
  { value: 'import', isCore: true },
  { value: 'readline', isCore: true },
  { value: 'toNum', isCore: true },
];
