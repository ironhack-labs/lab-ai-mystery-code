function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++;
  }
  return false;
}

const arr = [1, 2, 3, 4, 6, 8, 9, 10]
console.log(mystery1(arr));