const getData = async (url) => {
  const answer = await fetch(url);
  const datos = await answer.json();
  const arrayFiltro = datos.filter((dato) => dato.Edad % 2 == 0);
  imprimirResultados(arrayFiltro);
};

getData("../datos.json");

const imprimirResultados = (datos) => {
  console.log("Personas que tienen edad par: ");
  for (const persona of datos) {
    console.log("Nombre: " + persona.Nombre);
  }
};
