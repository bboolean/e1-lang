Box* core_equals(Box *a, Box *b) {
  if (a->type == b->type) {
    if (0 == a->type) {
      return new Box(a->double_leaf == b->double_leaf, true);
    } else if (1 == a->type) {
      return new Box(a->string_leaf == b->string_leaf, true);
    } else if (2 == a->type) {
      return new Box(a == b, true);
    } else if (3 == a->type) {
      return new Box(a->bool_leaf == b->bool_leaf, true);
    } else {      
      return new Box();
    }
  } else {
    return new Box(false, true);
  }
}
