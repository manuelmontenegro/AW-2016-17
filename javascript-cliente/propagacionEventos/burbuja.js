
$(document).ready(function() {
    $("body").on("click", function() {
        console.log("Se ha pulsado en el cuerpo de la página");
    });
    $("#contenedor").on("click", function() {
        console.log("Se ha pulsado en la región externa");
    });
    $("#region1").on("click", function(event) {
        console.log("Se ha pulsado en la región 1");
        event.stopPropagation();
    });
    $("#region2").on("click", function() {
        console.log("Se ha pulsado en la región 2");
    });
});
