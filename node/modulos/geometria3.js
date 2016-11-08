/*
 Módulo con operaciones de cálculo de áreas.
 
 Versión 3. Definiendo las funciones dentro del espacio module.exports.
*/


module.exports.areaCuadrado = function(lado) {
        return lado * lado;
};

module.exports.areaCirculo = function(radio) {
    return Math.PI * radio * radio;
};

module.exports.perimetroCuadrado = function(lado) {
    return 4 * lado;
};

module.exports.perimetroCirculo = function(radio) {
    return 2 * Math.PI * radio;
};



