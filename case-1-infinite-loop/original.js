// CASE 1: The Infinite Loop (BROKEN CODE)
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

// Test cases
console.log(mystery1([1, 3, 5]));      // What will happen?
console.log(mystery1([2, 4, 6]));      // What will happen?
console.log(mystery1([1, 2, 3]));      // What will happen?
