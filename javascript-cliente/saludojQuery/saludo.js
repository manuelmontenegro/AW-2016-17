
function botonPulsado() {
    alert("¡Me has pulsado!");
}

$(document).ready(function() {
    $("#miBoton").on("click", botonPulsado);
});
