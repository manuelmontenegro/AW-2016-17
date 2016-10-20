// planets.js
// ----------

// Primer ejemplo de código en Javascript

"use strict";

var planetas = [
    "Mercurio", "Venus", "Tierra",
    "Marte", "Júpiter", "Saturno",
    "Urano", "Neptuno"
    ];
    
planetas.forEach(function(p) {
    console.log("¡Hola, " + p + "!");
});
