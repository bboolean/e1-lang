shared_ptr<Box>  core_map(auto fn, shared_ptr<Box> a) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = fn(a->indexes[i]);
  }
  return result;
};
shared_ptr<Box>  core_map(shared_ptr<Box> b, shared_ptr<Box> a) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = b;
  }
  return result;
};
auto core_map(auto fn) {
  return [fn] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_map(fn, b);};
}
auto core_map(shared_ptr<Box> a) {
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_map(a, b);};
}
