void _core_log(Box *a, bool child = false) {
  if (0 == a->type) {
    cout << a->double_leaf;
  } else if (1 == a->type) {
    if (child) {
      cout << '"' << a->string_leaf << '"';
    } else {
      cout << a->string_leaf;
    }
  } else if (2 == a->type) {
    cout << "[ ";

    for(auto i=0; i < a->size; i++) {
      _core_log(a->indexes[i], true);
      cout << ' ';
    }

    cout << ']';
  }
}
void core_log(Box *a) {
  _core_log(a);
  cout << endl;
}
