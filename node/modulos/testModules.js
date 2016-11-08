"use strict";

// testModules.js
// --------------

var fib = require("./moduloFib2.js");

for (var i = 0; i < 15; i++)
    console.log(`fib(i) = ${fib(i)}`);


var geometria = require("./geometria.js");

console.log(geometria.areaCuadrado(10));
console.log(geometria.areaCirculo(10));

var bd1 = require("./bd");

bd1.añadirPersona("11111111V", "David", new Date());
console.log(bd1.numeroPersonas());

// ...

var bd2 = require("./bd");
console.log(bd2.numeroPersonas());

var os = require("os");
console.log(`Nombre del host: ${os.hostname()}`);
console.log(`Directorio personal: ${os.homedir()}`);

var util = require("util");
var mensaje = util.format("Tienes %d años", 45);
console.log(mensaje);

