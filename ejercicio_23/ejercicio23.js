let objeto = {};

let handler = {
  set(target, propiedad, valor) {
    try {
      if (valor === "") {
        throw new TypeError("Solo se permite ingresar datos numericos");
      }

      if (propiedad === "numerico" && !/^\d+$/.test(valor)) {
        throw new TypeError("Solo se permite ingresar datos numericos");
      }

      if (propiedad === "alfanumerico" && !/^[a-z]+$/i.test(valor)) {
        throw new TypeError("Solo se permite ingresar datos alfanumericos");
      }

      if (
        propiedad === "email" &&
        !/^[\w\d._%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(valor)
      ) {
        throw new TypeError("El correo electronico ingresado es invalido");
      }

      if (
        propiedad === "date" &&
        !/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(valor)
      ) {
        throw new TypeError("Fecha ingresada invalida");
      }

      target[propiedad] = propiedad === "numerico" ? parseInt(valor) : valor;
      return true;
    } catch (error) {
      alert(`Error en la propiedad: "${propiedad}" :  ${error.message}`);

      console.error(error);
      return false;
    }
  },
};

objeto = new Proxy(objeto, handler);

objeto.numerico = prompt("Ingrese un número:");
objeto.alfanumerico = prompt("Ingrese solo letras:");
objeto.email = prompt("Ingrese su correo electrónico:");
objeto.date = prompt("Ingrese una fecha (dd/mm/yyyy):");

console.log(objeto);
