function map(array, callback) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(callback(array[i]));
  }
  return nuevoArray;
}


let cantidad = parseInt(prompt("¿Cuantos numeros ingresara?"));
let numeros = [];
for (let i = 0; i < cantidad; i++) {
  numeros.push(parseInt(prompt(`Ingrese el numero N°${i + 1}: `)));
}

let arrayFinal = map(numeros, (num) => num * 2);
alert("Numeros doblados: "+arrayFinal);


