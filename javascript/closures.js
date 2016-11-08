/*
 * Pruebas con variables referenciadas desde funciones
 * anónimas.
 */

"use strict";


var y = 3; // Variable global

var f = function(x) {
    return x + y;
}

console.log(f(5));

y = 9;
console.log(f(2));


var z = 3;

function g() {
    var z = 7;
    return function(x) { return z + x; };
}

var h = g();
console.log(h(5));
