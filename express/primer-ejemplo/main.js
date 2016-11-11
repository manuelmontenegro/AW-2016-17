"use strict";

var path = require("path");
var express = require("express");

var app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", function(request, response) {
    response.status(200);
    response.type("text/plain; charset=utf-8");
    response.end("Esta es la página raíz");
});

var usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

app.get("/users.html", function(request, response) {
    response.status(200);
    response.render("users", { users: usuarios });
});

app.get("/usuarios.html", function(request, response) {
    response.redirect("/users.html");
});

app.listen(3000, function() {
    console.log("Servidor arrancado en el puerto 3000");
});