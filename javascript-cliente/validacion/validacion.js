
$(document).ready(function() {
    $("#formulario input[type=submit]").on("click", function(event) {
        var valor = $("#formulario input[type=text]").prop("value");
        if (isNaN(Number(valor))) {
           alert("No has introducido ningún número!");
           event.preventDefault();
        } else {
        /*
            $("#formulario").css("position", "relative");
            $("#formulario").animate({
                "top": "100px",
                "opacity": "0"
            }, 500);
           event.preventDefault();
        */
        }
    });
});
