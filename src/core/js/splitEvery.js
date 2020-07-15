const core_splitEvery = core_curry2((a, b) => {
  const core_result = [];
  let i = 0;
  while (i < b.length) {
    result.push(b.slice(i, (i += a)));
  }
  return result;
});
