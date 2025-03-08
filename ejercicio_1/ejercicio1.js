  const imprimirNumeros_Interval = (desde, hasta) => {
    const intervalo = setInterval(() => {
      if (desde <= hasta)
        console.log(desde++);
      else {
        clearInterval(intervalo);
        console.log("Finalizado");
      }
    }, 1000);
  }

const imprimirNumeros_SetTimeout = (desde, hasta) => {
  let contador = desde;

  setTimeout(function imprimir() {
    alert(contador);
    if (contador < hasta) {
      setTimeout(imprimir, 1000);
    }
    contador++;
  }, 1000);
}


let opcion = parseInt(prompt(`Opcion:
  1. Ejercicio con setInterval.
  2. Ejercicio con setTimeout.`));

let desde = parseInt(prompt("Ingrese el numero que comenzamos: "));
let hasta = parseInt(prompt("Ingrese el numero que termina: "));
if (opcion == 1) {
  imprimirNumeros_Interval(desde, hasta);
} else {
  imprimirNumeros_SetTimeout(desde, hasta);
}
