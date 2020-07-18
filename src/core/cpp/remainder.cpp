Box* core_remainder(Box *a, Box *b) {
  return new Box((int)a->double_leaf % (int)b->double_leaf);
}

auto core_remainder(Box *a) {
  return [a] (Box *b)->Box* {return core_remainder(a, b);};
}
