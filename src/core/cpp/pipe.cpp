auto pipe (auto a) {
  return [a] (auto l) {return a(l);};
};
auto pipe (auto a, auto b) {
  return [a, b] (auto l) {return b(a(l));};
};
auto pipe (auto a, auto b, auto c) {
  return [a, b, c] (auto l) {return c(b(a(l)));};
};
auto pipe (auto a, auto b, auto c, auto d) {
  return [a, b, c, d] (auto l) {return d(c(b(a(l))));};
};
auto pipe (auto a, auto b, auto c, auto d, auto e) {
  return [a, b, c, d, e] (auto l) {return e(d(c(b(a(l)))));};
};
auto pipe (shared_ptr<Box> a) {
  return a;
};
auto pipe (shared_ptr<Box> a, auto b) {
  return b(a);
};
auto pipe (shared_ptr<Box> a, auto b, auto c) {
  return c(b(a));
};
auto pipe (shared_ptr<Box> a, auto b, auto c, auto d) {
  return d(c(b(a)));
};
auto pipe (shared_ptr<Box> a, auto b, auto c, auto d, auto e) {
  return e(d(c(b(a))));
};
auto pipe (shared_ptr<Box> a, auto b, auto c, auto d, auto e, auto f) {
  return f(e(d(c(b(a)))));
};
