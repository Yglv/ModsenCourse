function performAsyncOperationsSequentially() {
  const asyncOperation1 = () => {
      return new Promise((resolve) => {
          setTimeout(() => {
              console.log("Асинхронная операция 1 выполнена");
              resolve();
          }, 1000);
      });
  };

  const asyncOperation2 = () => {
      return new Promise((resolve) => {
          setTimeout(() => {
              console.log("Асинхронная операция 2 выполнена");
              resolve();
          }, 1000);
      });
  };

  asyncOperation1()
      .then(() => asyncOperation2())
      .then(() => {
          console.log("Все асинхронные операции выполнены");
      })
      .catch((error) => {
          console.error("Error: ", error);
      });
}

performAsyncOperationsSequentially();
