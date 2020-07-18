shared_ptr<Box>  core_equals(shared_ptr<Box> a, shared_ptr<Box> b) {
  if (a->type == b->type) {
    if (0 == a->type) {
      return make_shared<Box>(a->double_leaf == b->double_leaf, true);
    } else if (1 == a->type) {
      return make_shared<Box>(a->string_leaf == b->string_leaf, true);
    } else if (2 == a->type) {
      return make_shared<Box>(a == b, true);
    } else if (3 == a->type) {
      return make_shared<Box>(a->bool_leaf == b->bool_leaf, true);
    } else {      
      return make_shared<Box>();
    }
  } else {
    return make_shared<Box>(false, true);
  }
}
