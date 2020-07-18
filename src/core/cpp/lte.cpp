Box* core_lte(Box *a, Box *b) {
  return new Box(a->double_leaf <= b->double_leaf, true);
};

auto core_lte(Box *a) {
  return [a] (Box *b)->Box* {return core_lt(a, b);};
}
