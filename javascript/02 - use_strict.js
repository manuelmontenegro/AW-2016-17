/*
 * Este programa contiene un bug, que es detectable si
 * se incluye la directiva 'use strict' de Javascript.
 */

//"use strict";

function busqueda_lineal(x, arr) {
    var encontrado = false;
    
    var indice = 0;
    while (indice < arr.length && !encontrado) {
        if (arr[indice] === x) {
            encontardo = true;
        }
        indice++;
    }
    
    return encontrado;
}

console.log(busqueda_lineal(3, [1, 3, 5, 6]));
console.log(busqueda_lineal(3, [1, 5, 6]));
