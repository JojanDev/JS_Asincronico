const obtenerOperacion = async(operacion) => {
  let dato = await operacion();
  alert(dato);
}

const operacion = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operacion completada");
    }, 1000);
  })
}

obtenerOperacion(operacion);

