void readline(shared_ptr<Box> text, auto fn) 
{
  cout << text->string_leaf;
  string input;
  getline(cin, input);
  fn(make_shared<Box>(input));
};
