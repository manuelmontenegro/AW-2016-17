"use strict";

var testing = require("../testing.js");


describe("Prueba de ordenación por inserción", function() {
    it("Ordenación de array ascendente", function() {
        var arr = [1, 2, 3, 4];
        testing.insertionSort(arr);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it("Ordenación de array descendente", function() {
        var arr = [8, 4, 2];
        testing.insertionSort(arr);
        expect(arr).toEqual([2, 4, 8]);
    });
    
    it("Inserción en array desordenado", function() {
        var arr = [3, 2];
        testing.insert(1, arr);
        expect(arr).toEqual([2, 3]);
    });

});




