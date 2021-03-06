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
#include <cmath>

using namespace std; 

class Box {
  public:
    map<string, shared_ptr<Box> > children;
    map<int, shared_ptr<Box> > indexes;
    bool leaf;
    int type;
    string string_leaf;
    double double_leaf;
    double bool_leaf;
    int size = 0;

    Box() {
      type = 4;
    }
    Box(bool a, bool isBool) {
      leaf = true;
      type = 3;
      double_leaf = a;
      string_leaf = a ? "true" : "false";
      bool_leaf = a;
    }
    Box(double a) {
      leaf = true;
      type = 0;
      double_leaf = a;
      string_leaf = to_string(a);
      bool_leaf = true;

      while ('0' == string_leaf[string_leaf.length()-1] || '.' == string_leaf[string_leaf.length()-1]) {
        if ('0' == string_leaf[string_leaf.length()-1]) {
          string_leaf.pop_back();
        } else if ('.' == string_leaf[string_leaf.length()-1]) {
          string_leaf.pop_back();
          break;
        }
      }
    }
    Box(string a) {
      leaf = true;
      type = 1;
      string_leaf = a;
      bool_leaf = string_leaf.length() > 0;
    }
    Box(vector<shared_ptr<Box> > a) {
      type = 2;
      leaf = false;
      size = a.size();

      for (int i = 0; i < a.size(); i++) {
        shared_ptr<Box> p = a.at(i);
        // children[to_string(i)] = p;
        indexes[i] = p;
      }
    }
    Box(vector<string> a, vector<string> b) {
      leaf = false;
      size = a.size();

      for (int i = 0; i < a.size(); i++) {
        shared_ptr<Box> p = make_shared<Box>(b[i]);
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
    //   shared_ptr<Box>  child = indexes[i];

    //   return *child;
    // }

    void push(shared_ptr<Box> a) {
      indexes[size] = a;
      size++;
    }
};

${core}

int main() { 
  auto mainprogram = ${main};
  core_log(mainprogram);
  return 0; 
}`;
};
