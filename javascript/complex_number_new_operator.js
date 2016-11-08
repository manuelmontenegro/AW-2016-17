"use strict";

/*
    Números complejos mediante la propiedad prototype.
*/


function Complejo(real, imag) {
    this.r = real;
    this.i = imag;
}

Complejo.prototype.modulo = function() {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

Complejo.prototype.argumento = function() {
    return Math.atan2(this.i, this.r);
}


var x = new Complejo(-3, 0);
console.log(x.modulo());
console.log(x.argumento());

console.log(x instanceof Complejo);
console.log(x instanceof Object);
console.log(x instanceof Number);
