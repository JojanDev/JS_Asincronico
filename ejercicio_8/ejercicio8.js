const findIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return i;
  }
  return undefined;
}

const callback = numero => numero % 2 == 0;

let cantidad = parseInt(prompt("¿Cuantos numeros ingresara?"));
let array = [];

for (let i = 0; i < cantidad; i++) {
  array.push(parseInt(prompt(`Ingrese el numero N°${i + 1}: `)));
}

let resultado = findIndex(array, callback);
if (typeof(resultado) == "number") {
  alert("El indice del primer elemento que coincide es: " + resultado);
} else {
  alert(resultado);
}
