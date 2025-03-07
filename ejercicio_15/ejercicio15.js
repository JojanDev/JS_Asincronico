const obtenerDatos = async (url) => {
  const datos = await fetch(url);
  const dataFormatJSON = await datos.text();
  console.log(dataFormatJSON);
};

const datos = obtenerDatos("../datos.json");
