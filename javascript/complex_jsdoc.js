"use strict";


/**
 * Representa un número complejo representado en forma rectangular
 * (parte real + parte imaginaria).
 *
 * Puede construirse un número a partir de su forma polar mediante
 * la función {@link Complejo.desdePolar} 
 *
 * @constructor
 * @param {number} real - Componente real.
 * @param {number} imag - Componente imaginaria.
 */
function Complejo(real, imag) {
    this.r = real;
    this.i = imag;
}

/**
 * Devuelve el módulo de un número complejo.
 *
 * @return Módulo del número.
 */
Complejo.prototype.modulo = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
};

/**
 * Devuelve el argumento de un número complejo, entre -Math.PI y Math.PI.
 *
 * @return Argumento del número de entrada
 */
Complejo.prototype.argumento = function () {
    return Math.atan2(this.i, this.r);
};

Complejo.EPSILON = 0.00001;

/**
 * Construye un número complejo a partir de su forma polar.
 *
 * @param {number} mod - Componente módulo (número no negativo).
 * @param {number} arg - Componente argumento (número entre -Math.PI y Math.PI)
 */
Complejo.desdePolar = function (mod, arg) {
    var real = mod * Math.cos(arg),
        imag = mod * Math.sin(arg);
    return new Complejo(real, imag);
};

/**
 * Determina si dos números complejos son iguales.
 *
 * @return true si los complejos son iguales, false en caso contrario.
 */
Complejo.iguales = function (c1, c2) {
    return (Math.abs(c1.r - c2.r) < Complejo.EPSILON)
        && (Math.abs(c1.i - c2.i) < Complejo.EPSILON);
};



