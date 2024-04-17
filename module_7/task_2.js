function checkProperty(obj, prop) {
  try {
      let value = obj[prop];
      return value;
  } catch (err) {
      if (err instanceof TypeError) {
          console.error("Ошибка TypeError: Невозможно получить доступ к свойству неопределенного объекта");
      } else {
          throw err;
      }
  }
}
