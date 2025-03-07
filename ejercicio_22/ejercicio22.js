let objeto = {
  nombre: "Johan",
  edad: 15,
};

const handler = {
  get() {
    return "Privado";
  },
};

const objetoProxy = new Proxy(objeto, handler);

console.log(objetoProxy.nombre);
console.log(objetoProxy.edad);
