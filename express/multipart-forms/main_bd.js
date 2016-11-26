/**
 * Formularios multiparte.
 * 
 * Aplicación web para subir ficheros al servidor.
 * En esta versión los ficheros se guardan en la BD.
 */

"use strict";

var express = require("express");
var path = require("path");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var mysql = require("mysql");

var upload = multer({ storage: multer.memoryStorage() });

var pool = mysql.createPool({
    host: "localhost",
    database: "multipart_forms",
    user: "root",
    password: ""
});


var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

//app.use(bodyParser.urlencoded({ extended: false }));

function insertarUsuario(usuario, callback) {
    pool.getConnection(function(err, con) {
        if (err) {
            callback(err);
        } else {
            var sql = "INSERT INTO personas(Nombre, Apellidos, Fumador, Foto) VALUES (?, ?, ?, ?)";
            con.query(sql, [usuario.nombre, usuario.apellidos, usuario.fumador, usuario.foto],
                function(err, result) {
                    con.release();
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result.insertId);
                    }
                });
        }
    });
}

function obtenerImagen(id, callback) {
    pool.getConnection(function(err, con) {
        if (err) {
            callback(err);
        } else {
            var sql = "SELECT Foto FROM personas WHERE Id = ?";
            con.query(sql, [id], function(err, result) {
                con.release();
                if (err) {
                    callback(err);
                } else {
                    if (result.length === 0) {
                        callback(null);
                    } else {
                        callback(null, result[0].Foto);
                    }
                }
            });
        }
    });
}

app.post("/procesar_formulario.html", upload.single("foto"), function(request, response) {
    var usuario = {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si",
        foto: null
    };
    
    if (request.file) {
        usuario.foto = request.file.buffer;
    }
    
    insertarUsuario(usuario, function(err, newId) {
        usuario.id = newId;
        response.render("datos_formulario_bd", usuario);
    });
});

app.get("/imagen/:id", function(request, response, next) {
    var n = Number(request.params.id);
    if (isNaN(n)) {
        next(new Error("Id no numérico"));
    } else {
        obtenerImagen(n, function(err, imagen) {
            if (imagen) {
                response.end(imagen);
            } else {
                response.status(404);
                response.end("Not found");
            }
        });
    }
    
});

app.listen(3000, function(err) {
    console.log("Escuchando en puerto 3000");
});       