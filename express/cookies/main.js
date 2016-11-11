"use strict";

var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.get("/increment.html", function(request, response) {
    if (request.cookies.contador === undefined) {
        response.redirect("/reset.html");
    } else {
        var contador = Number(request.cookies.contador) + 1;
        response.cookie("contador", contador);
        response.status(200);
        response.type("text/plain");
        response.end(`El valor actual del contador es ${contador}`);
    }
});

app.get("/reset.html", function(request, response) {
    response.status(200);
    response.cookie("contador", 0, { maxAge: 86400000 } );
    response.type("text/plain");
    response.end("Has reiniciado el contador");
});

app.listen(3000, function() {
    console.log("Servidor arrancado en el puerto 3000");
});