const merge = (left, right) => {
  const arr = [];
  while (left.length && right.length)
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }

  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  const half = Math.floor(arr.length / 2);

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);

  return merge(mergeSort(left), mergeSort(arr));
};

const arr = [2, 7, 5, 11, 9, 34, 12, 124, 13, 54, 76, 38, 23423];

console.log(mergeSort(arr));
