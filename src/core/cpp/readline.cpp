void readline(Box *text, auto fn) 
{
  cout << text->string_leaf;
  string input;
  getline(cin, input);
  fn(new Box(input));
};
