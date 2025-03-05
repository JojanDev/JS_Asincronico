const every = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
}

const callback = valor => valor < 40;

let cantidad = parseInt(prompt("¿Cuantos numeros ingresara?"));
let array = [];

for (let i = 0; i < cantidad; i++) {
  array.push(parseInt(prompt(`Ingrese el numero N°${i + 1}: `)));
}

let resultado = every(array, callback);
alert(resultado);
