function checkForinteger(число) {
  if (!Number.isInteger(число)) {
      throw new Error("Введенное значение не является целым числом");
  }
  return "Введенное значение является целым числом";
}

