"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var _ = require("underscore");
var path = require("path");
var app = express();

// Nuestra base de datos inicial
var agenda = [
    { nombre: "Pepita", telefono: "89731982" },
    { nombre: "Puri", telefono: "28329828" },
    { nombre: "David", telefono: "827272728" }
];


app.use(express.static(path.join(__dirname, "public")));

// Middleware para analizar el cuerpo de las peticiones
// cuando el tipo MIME es application/json

// Este middleware añade un atributo 'body' al objeto
// request con el objeto JSON recibido en el cuerpo de la
// petición.
app.use(bodyParser.json());


// Listado de contactos
app.get("/contactos", function(request, response) {
    response.json(agenda);
});


// Acceso a un contacto
app.get("/contactos/:indice", function(request, response) {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        var elem = agenda[indice];
        response.json(elem);
    } else {
        response.status(404);
        response.end();
    }
});

// Áñadir contactos
app.post("/contactos", function(request, response) {
    var nuevoElemento = request.body;
    agenda.push(nuevoElemento);
    response.status(200);
    response.end();
});

// Actualizar contactos
app.put("/contactos/:indice", function(request, response) {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        agenda[indice] = request.body;
    } else {
        // Error 400 = Bad Request
        response.status(400);
    }
    response.end();
});

// Borrar contactos
app.delete("/contactos/:indice", function(request, response) {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        agenda.splice(indice, 1);
    } else {
        // Error 400 = Bad Request
        response.status(400);
    }
    response.end();
});

// Cálculo del factorial
app.get("/factorial", function(request, response) {
    var numero = Number(request.query.num);
    if (!isNaN(numero)) {
        // El método _.range devuelve la lista [1, 2, 3, ..., n]
        // Mediante el uso de reduce hacemos la multiplicación
        // (1 *) 1 * 2 * 3 * 4 * ... * n
        var f = _.range(1, numero + 1).reduce((ac, x) => ac * x, 1);
        
        // Devolvemos el resultado
        response.json({ resultado: f });
    } else {
        response.status(400);
        response.end();
    }
});

app.listen(3000, function() {
   console.log("Escuchando en 3000"); 
});