Box* core_map(auto fn, Box *a) {
  Box *result = new Box();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = fn(a->indexes[i]);
  }
  return result;
};
Box* core_map(Box *b, Box *a) {
  Box *result = new Box();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = b;
  }
  return result;
};
auto core_map(auto fn) {
  return [fn] (Box *b)->Box* {return core_map(fn, b);};
}
auto core_map(Box *a) {
  return [a] (Box *b)->Box* {return core_map(a, b);};
}
