auto core_concat(Box *a) 
{
  return [a] (Box *b)->Box* {return new Box(a->string_leaf + b->string_leaf);};
}
Box* core_concat(Box *a, Box *b, Box *c = new Box(""), Box *d = new Box(""), Box *e = new Box(""), Box *f = new Box(""), Box *g = new Box(""), Box *h = new Box(""), Box *i = new Box(""), Box *j = new Box("")) 
{
  return new Box(a->string_leaf + b->string_leaf + c->string_leaf + d->string_leaf + e->string_leaf + f->string_leaf + g->string_leaf + h->string_leaf + i->string_leaf + j->string_leaf);
};
