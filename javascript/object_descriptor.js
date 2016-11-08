"use strict";

/*
    Pruebas con las propiedades de un objeto
*/


var x = {};

Object.defineProperty(x, "ancho", {
    value: 10,
    writable: false
});

console.log(x.ancho);
// x.ancho = 20; // ERROR

Object.defineProperty(x, "__alto", {
    writable: true,
    value: 10,
    enumerable: false
});

Object.defineProperty(x, "alto", {
    set: function(nuevoAlto) {
        if (nuevoAlto < 0) {
            this.__alto = 0;
        } else if (nuevoAlto > 100) {
            this.__alto = 100;
        } else {
            this.__alto = nuevoAlto;
        }
    },
    get : function() { return this.__alto; },
    enumerable: true
});

x.alto = -5;
console.log(x.alto);
x.alto = 21;
console.log(x.alto);

console.log(x);
