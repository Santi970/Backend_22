"use strict";

var lista = [2, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var a = '';
var b = 5;
a = b;
console.log({
  a: a
});
