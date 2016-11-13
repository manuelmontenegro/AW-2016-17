"use strict";

var express = require("express");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.locals.nombreApp = "Mi Aplicación";
app.locals.correo = "montenegro@fdi.ucm.es"

app.get("/pag1", function(request, response) {
    response.status(200);
    response.render("view1", {});
});

app.get("/pag2", function(request, response) {
    response.status(200);
    response.render("view2", { msg: "Esto es <b>importante</b>" });
});

var usuarios = [
    { nombre: "Francisco", apellidos: "Flores Blanco" },
    { nombre: "Elena", apellidos: "Nito del Bosque" },
    { nombre: "Germán", apellidos: "Gómez Gómez" }
]

app.get("/pag3", function(request, response) {
    response.status(200);
    response.render("view3", { usuarios: usuarios });
});

app.get("/pag4", function(request, response) {
    response.status(200);
    response.render("view4");
});

app.listen(3000, function() {
    console.log("Servidor arrancado en el puerto 3000");
});