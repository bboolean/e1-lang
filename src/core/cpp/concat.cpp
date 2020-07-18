auto core_concat(shared_ptr<Box> a) 
{
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return make_shared<Box>(a->string_leaf + b->string_leaf);};
}
shared_ptr<Box>  core_concat(shared_ptr<Box> a, shared_ptr<Box> b, shared_ptr<Box> c = make_shared<Box>(""), shared_ptr<Box> d = make_shared<Box>(""), shared_ptr<Box> e = make_shared<Box>(""), shared_ptr<Box> f = make_shared<Box>(""), shared_ptr<Box> g = make_shared<Box>(""), shared_ptr<Box> h = make_shared<Box>(""), shared_ptr<Box> i = make_shared<Box>(""), shared_ptr<Box> j = make_shared<Box>("")) 
{
  return make_shared<Box>(a->string_leaf + b->string_leaf + c->string_leaf + d->string_leaf + e->string_leaf + f->string_leaf + g->string_leaf + h->string_leaf + i->string_leaf + j->string_leaf);
};
