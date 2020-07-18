shared_ptr<Box> core_any(auto fn, shared_ptr<Box> a) {
  bool result = false;
  for (int i = 0; i < a->size; i++) {
    if (fn(a->indexes[i])->bool_leaf) {
      result = true;
    }
  }

  return make_shared<Box>(result, true);
};
