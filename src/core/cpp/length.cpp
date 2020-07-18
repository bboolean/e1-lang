shared_ptr<Box>  core_length(shared_ptr<Box> a) {
  return make_shared<Box>(a->size);
};
