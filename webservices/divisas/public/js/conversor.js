$(document).ready(function() {

    // Rellenamos los elementos de los combobox.
    // Para ello tenemos que hacer una llamada al servicio '/currencies'
    $.ajax({
        type: 'GET',
        url: '/currencies',
        success: function (data, textStatus, jqXHR) {
            data.forEach(function(elem) {
                // Para cada tipo de moneda, añadimos el elemento <option> dentro
                // del <select id="from">, que es donde están las divisas origen.
                //
                // Por ejemplo, si elem contiene el valor 'USD', se genera
                // el elemento <option value="USD">USD</option>
                $("#from").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
                // Idem, pero con el <select id="to">
                $("#to").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
            });
        }
    });
    
    // Manejador del botón de convertir
    $("#convertir").on("click", function() {
        var cantidad = $("#cantidad").val();
        // El método find() busca un elemento dentro de $("#from")
        // que se ajuste al selector pasado como parámetro. En este caso
        // se buscan, dentro de <select id="from">...</select>, aquellos
        // elementos <option> que estén seleccionados (solo debería haber uno).
        var monedaFrom = $("#from").find("option:selected").val();
        
        // Hacemos lo mismo con el combobox <select id="to">...</select>
        var monedaTo = $("#to").find("option:selected").val();
        
        // Utilizamos el servicio '/currency' pasando los tres parámetros
        $.ajax({
            type: 'GET',
            url: '/currency',
            
            // Al ser una petición de tipo GET, vamos a tener URLs
            // de la siguiente forma: /currency?from=USD&to=EUR&quantity=20
            data: {
                from: monedaFrom,
                to: monedaTo,
                quantity: cantidad
            },
            
            // En caso de éxito, mostramos el resultado.
            success: function (data, textStatus, jqXHR) {
                $("#resultadoFrom").text(monedaFrom + " " + cantidad);
                $("#resultadoTo").text(monedaTo + " " + 
                        Math.round(Number(data.result) * 100) / 100);
            }
        });
    });
});
















