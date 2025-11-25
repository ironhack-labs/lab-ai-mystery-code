function hasEvenNumber(arr) {
  // Initialize counter at 0 to start from first element
  let i = 0;
  
  // Loop through each element in the array
  while (i < arr.length) {
    // Check if current element is even (divisible by 2 with no remainder)
    if (arr[i] % 2 === 0) {
      // Found an even number, return true immediately
      return true;
    }
    // CRITICAL FIX: Increment counter to move to next element
    i++;
  }
  
  // If we've checked all elements and found no even numbers, return false
  return false;
}

// Test cases:
console.log(hasEvenNumber([1, 3, 5]));      // false - all odd
console.log(hasEvenNumber([1, 2, 3]));      // true - contains 2
console.log(hasEvenNumber([2, 4, 6]));      // true - all even
console.log(hasEvenNumber([1, 3, 7, 10]));  // true - contains 10
console.log(hasEvenNumber([]));             // false - empty array