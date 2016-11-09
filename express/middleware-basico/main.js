"use strict";

var express = require("express");
var path = require("path");
var morgan = require("morgan");

var app = express();

var ficherosEstaticos = path.join(__dirname, "public");

app.use(morgan("dev"));
app.use(express.static(ficherosEstaticos));


app.listen(3000, function() {
    console.log("Escuchando en el puerto 3000");
})

