
function botonPulsado() {
    $("li").css("background-color", "#FFFFD0");
    $("p.entradilla").addClass("seleccionado");
    
}

$(document).ready(function() {
    $("#miBoton").on("click", botonPulsado);
});
