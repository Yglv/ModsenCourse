"use strict";

function findFactorial(num) {
  return (num === 0) ? 1 : num * factorial(num - 1);
}
