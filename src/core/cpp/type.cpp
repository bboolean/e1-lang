Box* core_type(Box *a) {
  if (0 == a->type) {
    return new Box("num");
  } else if (1 == a->type) {
    return new Box("string");
  } else if (2 == a->type) {
    return new Box("list");
  } else if (3 == a->type) {
    return new Box("list");
  } else {
    return new Box("unknown");
  }
}
