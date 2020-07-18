shared_ptr<Box>  core_remainder(shared_ptr<Box> a, shared_ptr<Box> b) {
  return make_shared<Box>((int)a->double_leaf % (int)b->double_leaf);
}

auto core_remainder(shared_ptr<Box> a) {
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_remainder(a, b);};
}
