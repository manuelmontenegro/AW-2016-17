/*
 * Lectura asíncrona realizada de modo incorrecto.
 */

"use strict";

var fs = require("fs");

var contenidoFichero;

fs.readFile("FichTexto.txt", 
            { encoding: "utf-8" },
            function(err, contenido) {
                if (!err) {
                    contenidoFichero = contenido;
                    console.log(contenidoFichero);
                }        
            });

// Esta línea se ejecutará sin que el fichero se haya leído.
// Por tanto, la variable contenidoFichero tiene aún el valor
// undefined.
console.log(contenidoFichero);
