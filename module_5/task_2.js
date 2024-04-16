"use strict";

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
              swapElements(array, j, j + 1);
            }
        }
    }
    return array;
}

function swapElements(array, firstElemIndex, secondElemIndex){
  let temp = array[firstElemIndex];
  array[firstElemIndex] = array[secondElemIndex];
  array[secondElemIndex] = temp;
}

