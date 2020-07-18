shared_ptr<Box>  core_join(shared_ptr<Box> joiner, shared_ptr<Box> list) {
  string result = "";
  for (int i = 0; i < list->size; i++) {
    if (i+1 == list->size) {
      result += list->indexes[i]->string_leaf;
    } else {
      result += list->indexes[i]->string_leaf + joiner->string_leaf;
    }
  }
  return make_shared<Box>(result);
};

auto core_join(shared_ptr<Box> a) {
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_join(a, b);};
}
