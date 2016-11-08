"use strict";

/*
  Ámbito de variables
*/


var x = 5;

function cambiar_x() {
    x = 7;
}

function cambiar_x_local() {
    var x = 10;
}


console.log("Valor inicial de x: " + x);
cambiar_x();
console.log("Valor de x tras cambiar_x(): " + x);
cambiar_x_local();
console.log("Valor de x tras cambiar_x_local(): " + x);


for (var y = 0; y < 10; y++) {
    var z = y;
}

console.log(y);
console.log(z);

