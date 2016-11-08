/*
 * Ejemplo de conexión a una BD.
 */

"use strict";

var mysql = require("mysql");

var conexion = mysql.createConnection({
    host:  "localhost",
    user:  "root",
    password: "",
    database: "mibd"
});

conexion.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        conexion.query("SELECT Nombre, Apellidos, COUNT(t.Numero) AS numTelefonos " + 
                       "FROM contactos c LEFT JOIN tiene_telefono t ON c.Id = t.Id " +
                       "GROUP BY c.Id",
        function(err, rows) {
            if (err) {
                console.error(err);
            } else {
                rows.forEach(function(row) {
                    console.log(`${row.Nombre} ${row.Apellidos} tiene ${row.numTelefonos} números de teléfono`);
                });
            }
            conexion.end();
        });
    }
});


