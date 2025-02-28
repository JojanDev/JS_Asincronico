function map(array, callback) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray = callback(array[i], nuevoArray);
  }
  return nuevoArray;
}

const callback = (numero, nuevoArray) => {
  nuevoArray.push(numero);
  return nuevoArray;
}

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a ingresar: "));

let numeros = []
for (let i = 0; i < cantidad; i++) {
  numeros.push(parseInt(prompt(`Ingrese el numero ${i + 1}: `)));
}

let nuevoArray = map(numeros, callback);

alert(nuevoArray.join(", "));