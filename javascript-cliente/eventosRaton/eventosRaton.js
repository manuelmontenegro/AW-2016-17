
$(document).ready(function() {
    $("#superficie").on("mouseenter", function() {
        $("#posicion").show();
    });

    $("#superficie").on("mouseleave", function() {
        $("#posicion").hide();
    });

    $("#superficie").on("mousemove", function(event) {
        var posSuperficie = $("#superficie").offset();
        $("#posicion").text(
            (event.pageX - posSuperficie.left) + " x " + 
                (event.pageY - posSuperficie.top)
        );
    });
});
