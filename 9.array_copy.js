function arrayCopy(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      newArr[i] = [];
      newArr[i] = newArr[i].concat(arrayCopy(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let arr = [1, 2, 3, [1, 2, 3, 4, [1, 2, 3]]];

let arrCopy = arrayCopy(arr);

console.log(arrCopy);
