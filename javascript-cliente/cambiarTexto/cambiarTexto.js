
$(document).ready(function() {
    $("#campoNumero").on("change", function() {
        // Obtenemos valor actual
        var valor = $(this).prop("value").trim();
        
        if (valor === "") {
            $("#mensaje").text("El campo está <em>vacío</em>");
        } else if (isNaN(Number(valor))) {
            $("#mensaje").text("No se ha introducido un número");
        } else {
            $("#mensaje").text("");
        }
    });
});
