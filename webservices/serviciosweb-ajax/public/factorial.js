"use strict";

$(document).ready(function() {
    
    // Cada vez que se pulse el botón de 'Enviar'
    $("#botonEnviar").on("click", function() {
        
        // Obtenemos el valor contenido en el cuadro de texto
        var valor = $("#cuadroTexto").val();
        
        // Llamamos al servidor
        $.ajax({
            type: "GET",
            url: "/factorial",
            
            // Parámetros de la petición. Como la petición es de tipo GET,
            // se pasarán como cadena al final de la URL. Por ejemplo:
            // /factorial?num=5
            data: {
                num: valor
            },
            
            // En caso de éxito, colocamos el texto con el resultado
            // en el documento HTML
            success: function (data, textStatus, jqXHR) {
                $("#resultado").text("El resultado es " + data.resultado);
            },
            
            // En caso de error, mostramos el error producido
            error: function (jqXHR, textStatus, errorThrown) {
                 alert("Se ha producido un error: " + errorThrown);
            }
        });
    });
});