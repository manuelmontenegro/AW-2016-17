"use strict";

/*
    Prueba con los prototipos de los objetos
*/


var circulo = {
    centro: { x: 10, y: 20 },
    radio: 5
};

var circulo_verde = Object.create(circulo);
circulo_verde.color = "verde";


var circulo_rojo = Object.create(circulo);
circulo_rojo.color = "rojo";

console.log(circulo_rojo.color);
console.log(circulo_verde.radio);
console.log(circulo_verde.centro.x);
console.log(circulo_rojo.centro);

circulo.grosorBorde = 2;

console.log(circulo_rojo.grosorBorde);
console.log(circulo_verde.grosorBorde);

circulo.radio = 6;

console.log(circulo_rojo.radio);
console.log(circulo_verde.radio);

circulo_rojo.radio = 3;

console.log(circulo_rojo.radio);
console.log(circulo_verde.radio);

circulo_rojo.centro.x = 15;
console.log(circulo_verde.centro.x);

console.log(circulo.isPrototypeOf(circulo_rojo));
console.log(Object.getPrototypeOf(circulo_rojo));

console.log(circulo.toString());
