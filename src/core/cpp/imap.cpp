
Box* core_imap(auto fn, Box *a) {
  Box *result = new Box();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = fn(a->indexes[i], new Box(i));
  }
  return result;
};
auto core_imap(auto fn) {
  return [fn] (Box *b)->Box* {return core_imap(fn, b);};
}
