"use strict";

var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/usuarios", function(request, response, next) {
    fs.readFile("noexiste.txt", function(err, contenido) {
        if (err) {
            next(err);
        } else {
            request.contenido = contenido;            
        }
    });
});

app.use(function(request, response, next) {
    console.log("En caso de error, no se pasa por aquí.");
    next();
});

app.use(function(error, request, response, next) {
    console.log(response);
   // Código 500: Internal server error
   response.status(500);
   response.render("error", {
       mensaje: error.message,
       pila: error.stack
   });
});

app.listen(3000, function() {
    console.log("Escuchando en el puerto 3000");
});

