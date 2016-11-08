"use strict";

/**
 * Representa un número complejo representado en forma rectangular
 * (parte real + parte imaginaria).
 *
 * Puede construirse un número a partir de su forma polar mediante
 * la función {@link complejo.desdePolar} 
 *
 * @constructor
 * @param {number} real - Componente real.
 * @param {number} imag - Componente imaginaria.
 */
function complejo (real, imag) {
    this.r = real;
    this.i = imag;
}

/**
 * Devuelve el módulo de un número complejo.
 *
 * @return Módulo del número.
 */
complejo.prototype.modulo = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
};

/**
 * Devuelve el argumento de un número complejo, entre -Math.PI y Math.PI.
 *
 * @return Argumento del número de entrada
 */
complejo.prototype.argumento = function () {
    return Math.atan2(this.i, this.r);
};

complejo.EPSILON = 0.00001;

/**
 * Construye un número complejo a partir de su forma polar.
 *
 * @param {number} mod - Componente módulo (número no negativo).
 * @param {number} arg - Componente argumento (número entre -Math.PI y Math.PI)
 */
complejo.desdePolar = function (mod, arg) {
    var real = mod * Math.cos(arg),
        imag = mod * Math.sin(arg);
    return new complejo(real, imag);
};

/**
 * Determina si dos números complejos son iguales.
 *
 * @return true si los complejos son iguales, false en caso contrario.
 */
complejo.iguales = function (c1, c2) {
    return (Math.abs(c1.r - c2.r) < complejo.EPSILON)
        && (Math.abs(c1.i - c2.i) < complejo.EPSILON);
};



