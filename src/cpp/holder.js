module.exports = (
  text,
  core,
  almondtree,
  compile,
  config
) => {
  const ast = almondtree(`(let ${text})`, config);

  const main = compile(ast, config.languages.js);

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

int main() { 
  auto mainprogram = ${main};
  log(mainprogram);
  return 0; 
}`;
};
