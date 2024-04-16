"use strict";

function sumFirstAndLastDigit(num) {
    let strNum = String(num);
    let firstDigit = parseInt(strNum[0]);
    let lastDigit = parseInt(strNum[strNum.length - 1]);
    let sum = firstDigit + lastDigit;
    console.log(sum);
}

