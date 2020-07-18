auto core_divide(shared_ptr<Box> a) 
{
  return [a] (shared_ptr<Box> b) {return make_shared<Box>(b->double_leaf / a->double_leaf);};
}
auto core_divide(shared_ptr<Box> a, shared_ptr<Box> b) 
{
  return make_shared<Box>(a->double_leaf / b->double_leaf);
}
