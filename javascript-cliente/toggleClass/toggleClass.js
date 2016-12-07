
$(document).ready(function() {
    var cabecera = $("h1").eq(0);
    cabecera.on("click", function() {
        cabecera.toggleClass("rojo");
    });
    
    $("#botonVerde").on("click", function() {
        cabecera.css("color", "green");
    });
    
    $("#tamanyoActual").on("click", function() {
        alert("Tamaño actual: " + cabecera.css("font-size"));
    });
    
    $("#aumentarTamanyo").on("click", function() {
        cabecera.css("font-size", function(indice, actual) {
            var numPixels = /([0-9]+)px/.exec(actual)[1];
            return Number(numPixels) + 5 + "px";
        });
    });
});
