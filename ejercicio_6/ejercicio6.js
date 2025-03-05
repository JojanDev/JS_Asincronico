const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}

const callback = word => word[0] === word[0].toUpperCase();

let cantidad = parseInt(prompt("¿Cuantos palabras ingresara?"));
let array = [];

for (let i = 0; i < cantidad; i++) {
  array.push(prompt(`Ingrese la palabra N°${i + 1}: `));
}

let resultado = some(array, callback);
alert(resultado);
