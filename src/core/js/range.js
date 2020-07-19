const core_range = (a, b, c) => {
  const result = [];
  for (let i = a; i <= b; i += c || 1) {
    result.push(i);
  }
  return result;
};
