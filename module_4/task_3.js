"use strict";

function getSumOfSquares(array) {
    let sum = 0;
    return array.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, sum);
}

