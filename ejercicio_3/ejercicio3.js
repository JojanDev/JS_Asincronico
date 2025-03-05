function map(array, callback) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(callback(array[i]));
  }
  return nuevoArray;
}

let arrayFinal = map([1, 2, 3, 4, 5], (num) => num * 2);
console.log(arrayFinal);
