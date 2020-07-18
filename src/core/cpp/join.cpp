Box* core_join(Box *joiner, Box *list) {
  string result = "";
  for (int i = 0; i < list->size; i++) {
    if (i+1 == list->size) {
      result += list->indexes[i]->string_leaf;
    } else {
      result += list->indexes[i]->string_leaf + joiner->string_leaf;
    }
  }
  return new Box(result);
};

auto core_join(Box *a) {
  return [a] (Box *b)->Box* {return core_join(a, b);};
}
