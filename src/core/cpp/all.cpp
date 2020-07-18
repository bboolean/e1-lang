shared_ptr<Box> core_all(auto fn, shared_ptr<Box> a) {
  bool result = true;
  for (int i = 0; i < a->size; i++) {
    if (! fn(a->indexes[i])->bool_leaf) {
      result = false;
    }
  }

  return make_shared<Box>(result, true);
};
