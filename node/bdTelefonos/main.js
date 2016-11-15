/*
 * Ejemplo de de acceso a la BD de contactos.
 */

var mysql = require("mysql");

var datosConexion = {
    host: "localhost",
    user: "root",
    password: "",
    database: "mibd"
};

/**
 * Obtiene el nombre y apellidos de un usuario a partir de su identificador
 * 
 * @param {string} id  Identificador del usuario a buscar
 * @param {function} callback  Función callback que recibirá el objeto Error (en su caso) 
 *              y el usuario recuperado como un objeto con dos atributos: nombre y apellidos.
 */
function buscarPorId(id, callback) {
    if (callback === undefined) callback = function() {};
    
    var conexion = mysql.createConnection(datosConexion);

    conexion.connect(function(err) {
        if (err) {
            callback(err);
        } else {
            conexion.query("SELECT Nombre, Apellidos  " +
                           "FROM Contactos c " +
                           "WHERE c.Id = " + id,
            function(err, result) {
                var row = result[0];
                var res = { nombre: row.Nombre, apellidos: row.Apellidos };
                conexion.end();
                callback(null, res);
            });
        }
    });
}


buscarPorId("4", function(err, result) {
    console.log(result);
});

/**
 * Obtiene todos los usuarios de la BD, cada uno con el número de direcciones
 * de correo asociadas al mismo.
 * 
 * @param {function} callback   Función que recibirá, además del objeto de tipo
 *          Error (en su caso), un array con cada uno de los usuarios. El array
 *          contendrá objetos con tres atributos: Nombre, Apellidos y NumCorreos.
 */
function devolverContactos(callback) {
    if (callback === undefined) callback = function() {};
    
    var conexion = mysql.createConnection(datosConexion);

    conexion.connect(function(err) {
        if (err) {
            callback(err);
        } else {
            conexion.query("SELECT c.Nombre, c.Apellidos, COUNT(tc.Correo) AS NumCorreos " +
                           "FROM Contactos c LEFT JOIN Tiene_correo tc ON c.Id = tc.Id " +
                           "GROUP BY c.Id",
            function(err, result) {
                conexion.end();
                callback(null, result);
            });
        }
    });
}

devolverContactos(function(err, result) {
    if (!err) {
        result.forEach(function(u) {
            console.log(`Nombre: ${u.Nombre} ${u.Apellidos}. Nº direcciones: ${u.NumCorreos}`);
        });
    }
});