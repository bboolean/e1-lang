const core_range = core_curry3((a, b, c = 1) => {
  const core_result = [];
  for (let i = a; i <= b; i += c) {
    result.push(i);
  }
  return result;
});
