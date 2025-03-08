function filter(palabrasArray, condicion) {
  let palabrasFiltro = [];
  for (let i = 0; i < palabrasArray.length; i++) {
    if (condicion(palabrasArray[i])) {
      console.log(palabrasArray[i]);

      palabrasFiltro.push(palabrasArray[i]);
    }
  }
  return palabrasFiltro;
}

const callback = (word) => word.length > 6;

let cantidad = parseInt(prompt("¿Cuantos palabras ingresara?"));
let palabras = [];
for (let i = 0; i < cantidad; i++) {
  palabras.push(prompt(`Ingrese la palabra N°${i + 1}: `));
}

let resultado = filter(palabras, callback);
alert(resultado.length);
if (resultado.length > 0) {
  alert("Palabras filtradas: " + resultado);
} else {
  alert("Ninguna palabra paso el filtro");
}
