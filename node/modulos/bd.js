/*
    Módulo con una variable "global": bd
 */

var bd = {
    "50382322X" : { nombre: "Francisco Martín", fecha: new Date(1978, 04, 04) },
    "46854322V" : { nombre: "Estela Lucas", fecha: new Date(1979, 03, 15) }
};


function obtenerEdad(fechaNacimiento) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < fechaNacimiento.getMonth()
        || (hoy.getMonth() === fechaNacimiento.getMonth() 
             && hoy.getDay() < fechaNacimiento.getDay())) {
        edad--;
    }
    return edad;
}

function obtenerPersona(dni) {
    return bd[dni];
}

function numeroPersonas() {
    return Object.getOwnPropertyNames(bd).length;
}

function añadirPersona(dni, nomb, fechaNac) {
    bd[dni] = {
        nombre: nomb,
        fecha: fechaNac
    };
}

module.exports = {
    obtenerPersona: obtenerPersona,
    numeroPersonas: numeroPersonas,
    añadirPersona: añadirPersona
};
