
$(document).ready(function() {
    $("#formulario input[type=submit]").on("click", function(event) {
        var valor = $("#formulario input[type=text]").prop("value");
        if (isNaN(Number(valor))) {
           alert("No has introducido ningún número!");
           event.preventDefault();
        }
    });
});
