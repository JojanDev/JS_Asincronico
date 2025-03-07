const obtenerDatos = async (url) => {
  const datos = await fetch(url);
  const dataFormatJSON = await datos.json();
  return dataFormatJSON;
};

const datos = obtenerDatos("../datos.json");

datos.then((datos) => {
  const filtro = datos.filter((dato) => dato.Nombre[0] === "A");
  for (const element of filtro) {
    console.log("Nombre: " + element.Nombre);
  }
});
