const promesaRechazada = async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise rechazada");
      }, 2000);
    })
  } catch (error) {
    alert(Error(error));
  }
}

promesaRechazada();