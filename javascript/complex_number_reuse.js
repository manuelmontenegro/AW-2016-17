"use strict";

/*
    Reutilización de métodos entre objetos
*/


function moduloComplejo() {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

function argumentoComplejo() {
    return Math.atan2(this.i, this. r);
}

function construirComplejo(real, imag) {
    return {
        r : real,
        i : imag,
        modulo: moduloComplejo,
        argumento: argumentoComplejo
    }
}

var x = construirComplejo(-3, 1);

var c1 = construirComplejo(-3, 0);
console.log(c1.argumento());

var c2 = construirComplejo(1, 1);
console.log(c2.modulo());


c1.coordenadasPolares = function() {
    console.log("(" + this.modulo() + ", " + this.argumento() + ")");
}
c1.coordenadasPolares();



