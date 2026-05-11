// fixed version
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true; // Found an even number!
    }
    i++; // Increment i so we move to the next number
  }
  return false; // No even numbers found
}

// --- Testing the fixed version ---

const test1 = [1, 3, 5, 8, 11]; 
const test2 = [1, 3, 5, 7, 9];
const test3 = [];
const test4 = [2, 4, 6];

console.log("Test 1 (Has 8):", mystery1(test1)); // Expected: true
console.log("Test 2 (All odd):", mystery1(test2)); // Expected: false
console.log("Test 3 (Empty):", mystery1(test3));   // Expected: false
console.log("Test 4 (All even):", mystery1(test4)); // Expected: true