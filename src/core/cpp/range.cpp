shared_ptr<Box>  core_range(shared_ptr<Box> a, shared_ptr<Box> b, shared_ptr<Box> c = make_shared<Box>(1)) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  int i = 0;
  for (int n = a->double_leaf; n <= b->double_leaf; n += c->double_leaf) {
    result->indexes[i] = make_shared<Box>(n);
    i++;
  }
  result->size = i;
  return result;
};
