shared_ptr<Box>  core_imap(auto fn, shared_ptr<Box> a) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = fn(a->indexes[i], make_shared<Box>(i));
  }
  return result;
};
shared_ptr<Box>  core_imap(shared_ptr<Box> b, shared_ptr<Box> a) {
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = a->size;
  for (int i = 0; i < a->size; i++) {
    result->indexes[i] = b;
  }
  return result;
};
auto core_imap(auto fn) {
  return [fn] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_imap(fn, b);};
}
auto core_imap(shared_ptr<Box> a) {
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_imap(a, b);};
}
