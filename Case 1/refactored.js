// Returns true if the array contains at least one even number
function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }

    i++; // prevents infinite loop
  }

  return false;
}
