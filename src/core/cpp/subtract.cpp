auto core_subtract(Box *a) {
  return [a] (Box *b) {return new Box(b->double_leaf - a->double_leaf);};
}

auto core_subtract(Box *a, Box *b) {
  return new Box(a->double_leaf - b->double_leaf);
}
