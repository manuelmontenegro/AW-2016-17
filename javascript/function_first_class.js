"use strict";

function incrementar(x) {
    return x + 1;
}

function duplicar(x) {
    return 2 * x;
}

function cuadrado(y) {
    return y * y;
}

function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function aplicar_funciones(funs, z) {
    for (var i = 0; i < funs.length; i++) {
        console.log("Aplicar función " + i + " pasando " + z + ": "
            + funs[i](z));
    }
}

function buscar_por_nombre(nombre) {
    switch(nombre) {
        case "INC": return incrementar;
        case "DUP": return dup;
        case "SQR": return cuadrado;
        case "FCT": return factorial;
        default   : return undefined;
    }
}




var f = incrementar;
console.log(f(5));
f = factorial;
console.log(f(10));

aplicar_funciones([incrementar, duplicar, cuadrado, factorial], 5);


var g = buscar_por_nombre("INC");
console.log(g(10));

aplicar_funciones(
    [ function(x) { return x - 3; },
      function(x) { return Math.sqrt(x); },
      factorial,
      function(z) { return Math.log(z); }  ], 5);
 
      
     

