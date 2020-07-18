shared_ptr<Box>  core_and(shared_ptr<Box> a, shared_ptr<Box> b) {
  return make_shared<Box>(a->bool_leaf && b->bool_leaf, true);
};
 