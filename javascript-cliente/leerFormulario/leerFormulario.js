
function mostrarInfo() {
    var edad = $("#campoEdad").prop("value");
    var fumador = $("#campoFumador").prop("checked");
    alert("Tienes " + edad + " años y " +
        (fumador ? "" : "no ") + "eres fumador");
}

$(document).ready(function() {
    $("#miBoton").on("click", mostrarInfo);
});
