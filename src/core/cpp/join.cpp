Box* core_join(Box *joiner, Box *list) 
{
  string result = "";
  core_log(new Box(list->size));
  for (int i = 0; i < list->size; i++) {
    if (i+1 == list->size) {
      result = result + list->indexes[i]->string_leaf;
    } else {
      result = result + list->indexes[i]->string_leaf + joiner->string_leaf;
    }
  }
  return new Box(result);
};
auto core_join(Box *a) {
  return [a] (Box *b)->Box* {return core_join(a, b);};
}
