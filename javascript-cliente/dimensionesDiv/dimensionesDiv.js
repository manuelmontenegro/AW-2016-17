function actualizarEtiqueta(elem) {
    var ancho = Math.round(elem.width());
    var alto = Math.round(elem.height());
    $("div.tamaño").text(`${ancho} x ${alto}`);
}


$(document).ready(function() {
    var parrafo = $("div.parrafo");
    actualizarEtiqueta(parrafo);
    
    $("#aumentarAnchura").on("click", function() {
        parrafo.width(function(index, current) {
            return current + 20;
        });
        actualizarEtiqueta(parrafo);
    });
});
