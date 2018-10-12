// Rights by power of two

"use strict";

let extend = require('extend');

let PowerOfTwo = function(list, configuration) {
  
  // From CRUD
  let rights = ['create', 'read', 'update', 'delete'];
  
  list.forEach((v, i) => {
    if (v) rights[i] = v;
  });
  
  // Config
  let config = {};
  
  if (configuration) {
    config = extend({}, config, configuration);
  }
  
  // Permission
  let permission = 0;
  
  // View config
  this.config = function() {
    let res = {obj: {}, arr: [].concat(rights)};
    rights.forEach((p, i) => {
      res.obj[(i + 1)] = p;
    });
    return res;
  };
  
  // Generate permissions
  this.generate = function(list) {
    let res = 0;
    list.forEach((name) => {
      let pow = rights.indexOf(name) + 1;
      if (!pow) {
        throw new Error('Permission "' + name + '" not defined');
      }
      res += Math.pow(2, pow);
    });
    permission = res;
    return res;
  };
  
  // View permission
  this.permission = function() {
    return permission;
  };
  
  // Test injection
  this.test = function(p) {
    if (typeof p == 'string') {
      let index = rights.indexOf(p) + 1;
      if (!index) return false;
      p = Math.pow(2, index);
    }
    if (typeof p != 'number') {
      return false;
    }
    return permission & p;
  };
  
};

module.exports = PowerOfTwo;
