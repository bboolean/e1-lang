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
    cout << "[";

    for(auto i=0; i < a->size; i++) {
      _core_log(a->indexes[i], true);
      if (i != a->size - 1) {
        cout << ' ';
      }
    }

    cout << ']';
  } else if (3 == a->type) {
    cout << a->string_leaf;
  }
}

Box* core_log(Box *a) {
  _core_log(a);
  if (4 != a->type) {
    cout << endl;
  }
  return new Box();
}
