"use strict";

function sumFirstHalfOfArray(array) {
    let halfLength = Math.floor(array.length / 2);
    let sum = 0;
    for(let i = 0; i < halfLength; i++) {
        sum += array[i];
    }
    return sum;
}
