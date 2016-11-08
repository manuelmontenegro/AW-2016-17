/*
 * Lectura asíncrona de un fichero.
 */

"use strict";

var fs = require("fs");

fs.readFile("FichTexto.txt", 
            { encoding: "utf-8" },
            function(err, contenido) {
                if (err) {
                    console.log("Se ha producido un error:");
                    console.log(err.message);
                } else {
                    console.log("Fichero leído correctamente:");
                    console.log(contenido);
                }        
            });
