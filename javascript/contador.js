"use strict";


/*
    El valor devuelto por la función contador está ligado
    a la variable 'i' de la llamada correspondiente.
*/
function contador() {
    var n = 1;
    return function() {
                return n++;
           }
}

var c1 = contador();
var c2 = contador();

console.log(c1());
console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());
console.log(c1());

