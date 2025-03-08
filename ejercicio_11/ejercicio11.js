const promesa = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

promesa().then(() => {
  alert("Promisa resuelta");
});
