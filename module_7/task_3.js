function divide(firstNum, secondNum) {
  if (secondNum === 0) {
      throw new Error("Error: Деление на 0");
  }
  return firstNum / secondNum;
}
