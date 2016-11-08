/*
    Pruebas con funciones de orden superior
*/

"use strict";


var personas = [ { nombre: "Ricardo", edad: 45}, 
                 { nombre: "Julia", edad: 24 }, 
                 { nombre: "Ashley", edad: 28 } ];

personas.forEach(function(p) {
    console.log("Hola, me llamo " + p.nombre 
                + " y tengo " + p.edad + " años");
})                 

var a = [1, 3, 5, 2, 4];
var dobles = a.map(function(n) {
    return n * 2;
});

var pares = a.filter(function(n) {
    return n % 2 === 0;
});

console.log(dobles); // [2, 6, 10, 4, 2]

console.log(pares); // [2, 6, 10, 4, 2]

var a = [2, 6, 9, 1];
var final = a.reduce(function(acum, n) { return 2 * acum +  n; }, 7);
console.log(final);

console.log(
    [1, 5, 7, 4].reduce(function(acum, x) { return acum + x; }, 0)
);

console.log(
    [1, 5, 7, 4].reduce(function(acum, x) { return acum * x; }, 0)
);

console.log(
    [6, 1, 4, 3, 7].reduce(function(acum, x) { 
        return Math.max(acum, x);
    }, -Infinity)
);
