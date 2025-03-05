function filter(palabras, callback) {
  let palabrasFiltro = [];
  for (let i = 0; i < palabras.length; i++) {
    callback == true ? palabrasFiltro.push(palabras[i]) : "";
  }
  return palabrasFiltro;
}

const callback = word => word.length > 6;

let cantidad = parseInt(prompt("¿Cuantos palabras ingresara?"));
let palabras = [];
for (let i = 0; i < cantidad; i++) {
  palabras.push(parseInt(prompt(`Ingrese la palabra N°${i + 1}: `)));
}

let resultado = filter(palabras, callback);
alert("Numeros doblados: " + resultado);
