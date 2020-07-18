Box* core_range(Box *a, Box *b, Box *c = new Box(1)) {
  Box *result = new Box();
  result->leaf = false;
  result->type = 2;
  int i = 0;
  for (int n = a->double_leaf; n <= b->double_leaf; n += c->double_leaf) {
    result->indexes[i] = new Box(n);
    i++;
  }
  result->size = i;
  return result;
};
