const manejarErrores = async () => {
  try {
    let file = await fetch("datos.json");
    let datos = await file.json();
    for (const persona of datos) {
      console.log(persona);
    }
  } catch (error) {
    console.log(Error(error));
  }
};

manejarErrores();
