auto core_multiply(Box *a) 
{
  return [a] (Box *b)->Box* {return new Box(a->double_leaf + b->double_leaf);};
}
Box* core_multiply(Box *a, Box *b, Box *c = new Box(1), Box *d = new Box(1), Box *e = new Box(1), Box *f = new Box(1), Box *g = new Box(1), Box *h = new Box(1), Box *i = new Box(1), Box *j = new Box(1)) 
{
  return new Box(a->double_leaf * b->double_leaf * c->double_leaf * d->double_leaf * e->double_leaf * f->double_leaf * g->double_leaf * h->double_leaf * i->double_leaf * j->double_leaf);
};
