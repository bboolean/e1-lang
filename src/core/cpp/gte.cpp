Box* core_gte(Box *a, Box *b) {
  return new Box(a->double_leaf >= b->double_leaf, true);
};

auto core_gte(Box *a) {
  return [a] (Box *b)->Box* {return core_gte(a, b);};
}
