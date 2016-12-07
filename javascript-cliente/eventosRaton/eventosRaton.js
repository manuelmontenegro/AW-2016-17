
$(document).ready(function() {
    $("#superficie").on("mouseenter", function() {
        $("#posicion").show();
    });

    $("#superficie").on("mouseleave", function() {
        $("#posicion").hide();
    });

    $("#superficie").on("mousemove", function(event) {
        $("#posicion").text(
            event.pageX + " x " + event.pageY
        );
    });
});
