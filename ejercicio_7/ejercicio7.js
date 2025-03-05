const find = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return array[i];
  }
  return false;
}

const callback = palabra => palabra.length >= 7;

let cantidad = parseInt(prompt("¿Cuantos palabras ingresara?"));
let array = [];

for (let i = 0; i < cantidad; i++) {
  array.push(prompt(`Ingrese la palabra N°${i + 1}: `));
}

let resultado = find(array, callback);
if (resultado) {
  alert("El primer elemento que coincide es: " + resultado);
} else {
  alert("No se encontro ninguna coincidencia");
}
