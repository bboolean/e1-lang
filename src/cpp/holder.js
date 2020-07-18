module.exports = (
  text,
  core,
  almondtree,
  compile,
  config
) => {
  const ast = almondtree(`(let ${text})`, config);

  const main = compile(ast, config.languages.cpp);

  return `#include <iostream>
#include <string>
#include <functional>
#include <vector>
#include <array>
#include <cstdarg>
#include <stdarg.h>
#include <typeinfo>
#include <functional>
#include <map>
#include <variant>
#include <cassert>
#include <memory>
#include <stdarg.h>

using namespace std; 

class Box {
  public:
    map<string, Box*> children;
    map<int, Box*> indexes;
    bool leaf;
    int type;
    string string_leaf;
    double double_leaf;
    int size = 0;

    Box() {}
    Box(bool a, bool isBool) {
      leaf = true;
      type = 3;
      double_leaf = a;
      string_leaf = a ? "true" : "false";
    }
    Box(double a) {
      leaf = true;
      type = 0;
      double_leaf = a;
      string_leaf = to_string(a);
    }
    Box(string a) {
      leaf = true;
      type = 1;
      string_leaf = a;
    }
    Box(vector<Box *> a) {
      type = 2;
      leaf = false;
      size = a.size();

      for (int i = 0; i < a.size(); i++) {
        Box *p = a.at(i);
        // children[to_string(i)] = p;
        indexes[i] = p;
      }
    }
    Box(vector<string> a, vector<string> b) {
      leaf = false;
      size = a.size();

      for (int i = 0; i < a.size(); i++) {
        Box *p = new Box(b[i]);
        children[a[i]] = p;
        indexes[i] = p;
      }
    }

    // int getInt() {
    //   return int_leaf;
    // }
    // string getString() {
    //   return string_leaf;
    // }

    // Box getChild(int i) {
    //   Box * child = indexes[i];

    //   return *child;
    // }

    void push(Box *a) {
      indexes[size] = a;
      size++;
    }
};

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
  } else if (3 == a->type) {
    cout << a->string_leaf;
  }
}
void core_log(Box *a) {
  _core_log(a);
  cout << endl;
}


${core}

int main() { 
  //auto mainprogram = 
  ${main};
  //core_log(mainprogram);
  return 0; 
}`;
};
