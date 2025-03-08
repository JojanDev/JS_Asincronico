const obtenerDatos = async (url) => {
  const datos = await fetch(url);
  const dataFormatJSON = await datos.text();
  console.log(dataFormatJSON);
};

obtenerDatos("../datos.json");
