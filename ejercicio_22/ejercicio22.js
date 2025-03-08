let objeto = {
  nombre: "Johan",
  edad: 15,
};

const handler = {
  get(target, prop, value) {
    return target[prop];
  },
};

const objetoProxy = new Proxy(objeto, handler);

console.log("Objeto Proxy creado");

console.log("Propiedad: Nombre: " + objetoProxy.nombre);
console.log("Propiedad: Edad: " + objetoProxy.edad);
