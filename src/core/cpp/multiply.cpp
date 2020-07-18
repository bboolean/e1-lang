auto core_multiply(shared_ptr<Box> a) 
{
  return [a] (shared_ptr<Box> b)->shared_ptr<Box>  {return make_shared<Box>(a->double_leaf + b->double_leaf);};
}
shared_ptr<Box>  core_multiply(shared_ptr<Box> a, shared_ptr<Box> b, shared_ptr<Box> c = make_shared<Box>(1), shared_ptr<Box> d = make_shared<Box>(1), shared_ptr<Box> e = make_shared<Box>(1), shared_ptr<Box> f = make_shared<Box>(1), shared_ptr<Box> g = make_shared<Box>(1), shared_ptr<Box> h = make_shared<Box>(1), shared_ptr<Box> i = make_shared<Box>(1), shared_ptr<Box> j = make_shared<Box>(1)) 
{
  return make_shared<Box>(a->double_leaf * b->double_leaf * c->double_leaf * d->double_leaf * e->double_leaf * f->double_leaf * g->double_leaf * h->double_leaf * i->double_leaf * j->double_leaf);
};
