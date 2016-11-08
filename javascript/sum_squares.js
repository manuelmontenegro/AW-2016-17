"use strict";

// Este programa calcula la suma de cuadrados
// del array 'arr'.

var sum = 0;
var arr = [1, 4, 8, 1, 3];

debugger; // Punto de ruptura

for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
}

console.log(sum);
