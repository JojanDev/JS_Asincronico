const encadenarPromises = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(1), 1000);

  }).then((result) => {
    return result + 1;

  }).then((result) => {
    return result + 1;
    
  })
}

const obtenerResultado = async() => {
  let dato = await encadenarPromises();
  alert(dato);
}
obtenerResultado();