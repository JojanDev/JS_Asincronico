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
  alert("Todas las promesas resueltas");
};

let cantidad = parseInt(prompt("Ingrese el total de elementos: "));
let array = [];
for (let i = 0; i < cantidad; i++) {
  array.push(parseInt(prompt(`Ingrese el numero N°${i + 1}: `)));
}
procesarLista(array);
