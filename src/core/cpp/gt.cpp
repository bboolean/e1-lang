Box* core_gt(Box *a, Box *b) {
  return new Box(a->double_leaf > b->double_leaf, true);
};

auto core_gt(Box *a) {
  return [a] (Box *b)->Box* {return core_gt(a, b);};
}
