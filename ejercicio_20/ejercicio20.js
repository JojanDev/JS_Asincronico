const procesarLista = async (lista) => {
  for (let i = 0; i < lista.length; i++) {
    alert(
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Promesa N°${i + 1} resuelta`);
        }, 2000);
      })
    );
  }
};

procesarLista([1, 2, 3, 4, 5, 6, 7]);
