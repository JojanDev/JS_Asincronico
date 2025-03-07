const promesas = async () => {
  let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 6000);
  });

  let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return Promise.all([promesa1, promesa2, promesa3]);
};

promesas().then(() => alert("Todas las promesas resueltas"));
