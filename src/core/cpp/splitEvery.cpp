Box* core_splitEvery(Box *SectionSize, Box *List) 
{
  Box *result = new Box();
  result->leaf = false;
  result->type = 2;
  result->size = 0;
  int i = 0;
  while (i < List->size) {
    Box *section = new Box();
    section->leaf = false;
    section->type = 2;
    for (int j = 0; j < SectionSize->double_leaf; j++) {
        // core_log(*List.indexes[i]);
        if (i < List->size) {
          section->indexes[j] = List->indexes[i];
          section->size++;
        } else {
          break;
        }
      i++;
    }

    result->indexes[result->size++] = section;
  }
  return result;
};

auto core_splitEvery(Box *a) {
  return [a] (Box *b)->Box* {return core_splitEvery(a, b);};
}
