// Case 1: The Infinite Loop #############
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

// Missing Increment: Inside the while loop, you never increment the counter (i++).
// first odd number crahes --> infinte loop
// const exarr = [7, 2,3,4,5,3,2,7,5,3,8,9]
const exarr = [4, 2,3,4,5,3,2,7,5,3,8,9]
console.log("Result = ", mystery1(exarr))