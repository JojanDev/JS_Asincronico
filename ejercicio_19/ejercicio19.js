const promesa1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Promesa 1 rechazada"), 1000)
);
const promesa2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promesa 2 lista"), 2000)
);
const promesa3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promesa 3 lista"), 1500)
);

Promise.allSettled([promesa1, promesa2, promesa3]).then((resultado) => {
  for (const promesa of resultado) {
    console.log(promesa);
  }
});
