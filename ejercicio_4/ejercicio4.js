const filter = (array, callback) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

const callback = numero => numero % 2 == 0;

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a ingresar: "));

let numeros = []
for (let i = 0; i < cantidad; i++) {
  numeros.push(parseInt(prompt(`Ingrese el numero ${i + 1}: `)));
}

let nuevoArray = filter(numeros, callback);

alert(`FILTRO NUMEROS PARES: 
  ${nuevoArray.join(", ")}`);