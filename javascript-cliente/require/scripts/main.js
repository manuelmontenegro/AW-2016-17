"use strict";

requirejs.config({
    baseUrl: "scripts",
    paths: {
        jquery: "../jquery/jquery-3.1.1.min"
    } 
});

define(["math/sqr", "math/fib", "geometria", "jquery"], function(sqr, fib, g, $) {

    console.log(`4^2 = ${sqr(4)}`);
    console.log(`fib(6) = ${fib(6)}`);
    console.log(`Area de circulo de radio 10: ${g.areaCirculo(10)}`);
    
});
