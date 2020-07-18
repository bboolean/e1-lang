shared_ptr<Box> core_set(shared_ptr<Box> a, shared_ptr<Box> b, shared_ptr<Box> c) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = c->size;
  for (int i = 0; i < c->size; i++) {
    if (i == a->double_leaf) {
      result->indexes[i] = b;
    } else {
      result->indexes[i] = c->indexes[i];
    }
  }
  return result;
};
