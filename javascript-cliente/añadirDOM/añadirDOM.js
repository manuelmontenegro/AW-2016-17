
$(document).ready(function() {
    $("#anyadirElemento").on("click", function() {
        var nuevoElemento = $("<li>Nuevo elemento</li>");
        $("#listaNumerada").append(nuevoElemento);
    });
});
