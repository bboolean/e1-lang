auto core_divide(Box *a) 
{
  return [a] (Box *b) {return new Box(b->double_leaf / a->double_leaf);};
}
auto core_divide(Box *a, Box *b) 
{
  return new Box(a->double_leaf / b->double_leaf);
}
