// CASE 1: Fixed - Check if array contains even number
function hasEvenNumber(arr) {
  let i = 0;
  // Loop through each number in the array
  while (i < arr.length) {
    // Check if current number is even (divisible by 2)
    if (arr[i] % 2 === 0) {
      return true;  // Found an even number!
    }
    i++;  // IMPORTANT: Increment counter to move to next element
  }
  // No even numbers found
  return false;
}

// Test cases
console.log(hasEvenNumber([1, 3, 5]));      // false (no even numbers)
console.log(hasEvenNumber([2, 4, 6]));      // true (has even numbers)
console.log(hasEvenNumber([1, 2, 3]));      // true (2 is even)
console.log(hasEvenNumber([7, 9, 11]));     // false (all odd)
