/**
 * Formularios multiparte.
 * 
 * Aplicación web para subir ficheros al servidor.
 * En esta versión los ficheros no se guardan en la BD,
 * sino que se copian al el directorio public/
 */
"use strict";

var express = require("express");
var path = require("path");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var mysql = require("mysql");

var upload = multer({ dest: "uploads/" });


var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

app.post("/procesar_formulario.html", upload.single("foto"), function(request, response) {
    
    /*
    console.log("Fichero guardado en:"  + request.file.path);
    console.log("Tamaño: " + request.file.size);
    console.log("Tipo de fichero: " + request.file.mimetype);
    */
    
    var urlFichero;
    
    if (request.file) {
        urlFichero = path.join("img", request.file.filename);
        var fichDestino = path.join("public", urlFichero);
        fs.createReadStream(request.file.path).pipe(fs.createWriteStream(fichDestino));
    }
    
    response.render("datos_formulario", {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si",
        imagen: urlFichero
    });
});

app.listen(3000, function(err) {
    console.log("Escuchando en puerto 3000");
});       