var express = require("express");

var miRouter = express.Router();

miRouter.get("/crear_usuario.html", function(request, response) {
    console.log("Creando usuario.");
    response.end();
});

miRouter.get("/buscar_usuario.html", function(request, response) {
    console.log("Buscando usuario");
    response.end();
});

module.exports = miRouter;