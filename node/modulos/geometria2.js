/*
 Módulo con operaciones de cálculo de áreas.
 
 Versión 2. Definiendo las funciones dentro del objeto a exportar.
*/

module.exports = {
    areaCuadrado: function(lado) {
        return lado * lado;
    },

    areaCirculo: function(radio) {
        return Math.PI * radio * radio;
    },

    perimetroCuadrado: function(lado) {
        return 4 * lado;
    },
    
    perimetroCirculo: function(radio) {
        return 2 * Math.PI * radio;
    }
};
