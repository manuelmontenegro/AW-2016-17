"use strict";

var express = require("express");
var session = require("express-session");

var mysqlSession = require("express-mysql-session");

var MySQLStore = mysqlSession(session);
 
var sessionStore = new MySQLStore({
    host: "localhost",
    user: "root",
    password: "",
    database: "miBD"
});

var app = express();

var middlewareSession = session({
    saveUninitialized: false,
    secret: "foobar34",
    resave: false,
    store: sessionStore
});

app.use(middlewareSession);

app.get("/increment.html", function(request, response) {
    if (request.session.contador === undefined) {
        response.redirect("/reset.html");
    } else {
        var contador = Number(request.session.contador) + 1;
        request.session.contador++;
        response.status(200);
        response.type("text/plain");
        response.end(`El valor actual del contador es ${contador}`);
    }
});

app.get("/reset.html", function(request, response) {
    response.status(200);
    request.session.contador = 0;
    response.type("text/plain");
    response.end("Has reiniciado el contador");
});

app.listen(3000, function() {
    console.log("Servidor arrancado en el puerto 3000");
});