shared_ptr<Box>  core_splitEvery(shared_ptr<Box> SectionSize, shared_ptr<Box> List) 
{
  shared_ptr<Box> result = make_shared<Box>();
  result->leaf = false;
  result->type = 2;
  result->size = 0;
  int i = 0;
  while (i < List->size) {
    shared_ptr<Box> section = make_shared<Box>();
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

auto core_splitEvery(shared_ptr<Box> a) {
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return core_splitEvery(a, b);};
}
