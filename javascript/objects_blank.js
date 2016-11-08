"use strict";

/*
    Añadiendo atributos y cambiando atributos a los objetos.
*/

var x = {
    nombre: "Ana María",
    apellidos: "Gamboa Esteban",
    edad: 54
};

console.log(Object.keys(x));

if ("edad" in x) {
    console.log("x tiene un atributo llamado 'edad'");
}

var y = {};

x.edad++;
x.nombre = "Ana Josefa";
y.nombre = "Javier";

delete x.edad;

console.log(x);
console.log(y);

var z = {
    "Atributo con espacios": 21,
    "14": "foo",
    "false": "ok"
};

console.log(z["Atributo con espacios"]);
var coords1 = { x: 20, y: 30 };
var coords2 = { x: 20, y: 30 };
var coords3 = coords1;


console.log(coords1 === coords2);
console.log(coords1 === coords3);


