// Case 1: The Infinite Loop (refactored)
// This function checks if there is at least one even number in the array.
function containsEvenNumber(arr) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is even, return true
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  // If no even number is found, return false
  return false;
}

// Example usage:
// console.log(containsEvenNumber([1, 3, 5])); // false
// console.log(containsEvenNumber([1, 4, 5])); // true
