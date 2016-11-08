"use strict";


var express = require("express");

var app = express();

app.get("/", function(request, response) {
    response.status(200);
    response.set("Content-Type", "text/plain; charset=utf-8");
    response.end("Esta es la página raíz");
});

app.get("/users.html", function(request, response) {
    response.status(200);
    response.set("Content-Type", "text/plain; charset=utf-8");
    response.end("Aquí se mostrará la página de usuarios");
});

app.listen(3000, function() {
    console.log("Servidor arrancado en el puerto 3000");
});