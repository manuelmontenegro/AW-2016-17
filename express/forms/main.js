"use strict";

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
//app.use(bodyParser.text({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/procesar_get.html", function(request, response) {
    console.log(request.query);
    var sexoStr = "No especificado";
    switch (request.query.sexo) {
        case "H": sexoStr = "Hombre"; break;
        case "M": sexoStr = "Mujer"; break;
    }
    response.render("infoForm", {
        nombre: request.query.nombre,
        edad: request.query.edad,
        sexo: sexoStr,
        fumador: (request.query.fumador === "ON" ? "Sí" : "No")
    });
    response.end();
});

app.post("/procesar_post.html", function(request, response) {
    console.log(request.body);
    response.end();
});


app.listen(3000, function() {
    console.log("Escuchando en el puerto 3000");
});

