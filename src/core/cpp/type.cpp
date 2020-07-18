shared_ptr<Box>  core_type(shared_ptr<Box> a) {
  if (0 == a->type) {
    return make_shared<Box>("num");
  } else if (1 == a->type) {
    return make_shared<Box>("string");
  } else if (2 == a->type) {
    return make_shared<Box>("list");
  } else if (3 == a->type) {
    return make_shared<Box>("list");
  } else {
    return make_shared<Box>("unknown");
  }
}
