"use strict";

var pregunta = "¿Cuál es tu color favorito?";
var opciones = [
    {
        texto: "Rojo",
        numeroVotos: 0
    },
    {
        texto: "Azul",
        numeroVotos: 0
    },
    {
        texto: "Verde",
        numeroVotos: 0
    },
    {
        texto: "Ninguno de los anteriores",
        numeroVotos: 0
    }
];

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/respuestas.html", function(request, response) {
    response.render("respuestas", {opcs: opciones});    
});

app.get("/index.html", function(request, response) {
    response.render("index", {opcs: opciones,
                              pregunta: pregunta});    
});

app.post("/enviar_respuesta", function(request, response) {
    var numOpcion = Number(request.body.respuesta);
    console.log("Opción seleccionada: " + numOpcion);
    if (isNaN(numOpcion)) {
        response.redirect("/index.html");
    } else {
        opciones[numOpcion].numeroVotos++;
        response.render("respuestas", {opcs: opciones});
    }
});

app.listen(3000, function(err) {
   console.log("Escuchando en puerto 3000"); 
});