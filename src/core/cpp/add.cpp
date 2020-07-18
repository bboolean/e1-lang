auto core_add(Box *a) 
{
  return [a] (Box *b)->Box* {return new Box(a->double_leaf + b->double_leaf);};
}
Box* core_add(Box *a, Box *b, Box *c = new Box(0), Box *d = new Box(0), Box *e = new Box(0), Box *f = new Box(0), Box *g = new Box(0), Box *h = new Box(0), Box *i = new Box(0), Box *j = new Box(0)) 
{
  return new Box(a->double_leaf + b->double_leaf + c->double_leaf + d->double_leaf + e->double_leaf + f->double_leaf + g->double_leaf + h->double_leaf + i->double_leaf + j->double_leaf);
};
