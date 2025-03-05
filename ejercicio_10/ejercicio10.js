const delay = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

let seg = parseInt(prompt("Ingrese los segundos: "));

delay(seg * 1000).then(() => {
  alert(`Han pasado ${seg} segundos`);
})