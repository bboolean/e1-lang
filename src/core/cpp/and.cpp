Box* core_and(Box *a, Box *b) {
  return new Box(a->bool_leaf && b->bool_leaf, true);
};
 