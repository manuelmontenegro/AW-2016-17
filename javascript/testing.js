"use strict";

function swap(arr, i, j) {
    var e = arr[i];
    arr[i] = arr[j];
    arr[j] = e;
}

function insert(i, arr) {
    var j = i;
    while (j > 1 && arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        j = j - 1;
    }
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        insert(i, arr);
    }
}

module.exports = {
    insertionSort : insertionSort,
    insert        : insert
}
