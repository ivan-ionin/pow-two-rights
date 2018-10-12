// Rights by power of two

"use strict";

let PTR = require('./pow-two-rights');
let ptr = new PTR([
  // Redefine base permission
  'select',
  'insert',
  'update',
  'delete',
  // And add other permission
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
], {});

// I can view config
let config = ptr.config();
console.log('I can view config');
console.log(config); // Permissions list

// I can generate permission
let permission = ptr.generate(['select', 'insert', 'update', 'january', 'february', 'december']);
console.log('I can generate permission');
console.log(permission); // Permissions sum (for 'select', 'insert', 'update', 'january', 'february', 'december' = 65646)

// I can test injection
console.log('I can test injection');
config.arr.forEach((p) => {
  let o = 'Test pormission "' + p + '" === ';
  let r = ptr.test(p);
  o += (r ? 'true' : 'false');
  console.log(o);
});

// If for set rights you use this - ptr.generate(['select', 'insert', 'update', 'january', 'february', 'december']);
// then you see
// Test pormission "select" === true
// Test pormission "insert" === true
// Test pormission "update" === true
// Test pormission "delete" === false
// Test pormission "january" === true
// Test pormission "february" === true
// Test pormission "march" === false
// Test pormission "april" === false
// Test pormission "may" === false
// Test pormission "june" === false
// Test pormission "july" === false
// Test pormission "august" === false
// Test pormission "september" === false
// Test pormission "october" === false
// Test pormission "november" === false
// Test pormission "december" === true

