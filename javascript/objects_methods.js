"use strict";

/*
    Primeros métodos.
*/

var empleado = {
    nombre: "Manuel",
    
    saludar: function() {
        console.log("¡Hola, " + this.nombre + "!");
    },
    
    cambiarNombre: function(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
};

empleado.saludar();
empleado.cambiarNombre("Irene");
empleado.saludar();



var otro_empleado = {
    nombre: "David"
};

otro_empleado.saludar = empleado.saludar;
otro_empleado.saludar();

var f = empleado.saludar;
f();


