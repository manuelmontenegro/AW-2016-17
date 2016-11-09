
"use strict";

var express = require("express");
var path = require("path");

var app = express();

var miRouter = require("./miRouter");

app.use("/usuarios", miRouter);

app.listen(3000, function() {
    console.log("Escuchando en el puerto 3000");
});

