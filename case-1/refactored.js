// Checks if an array contains at least one even number
function hasEvenNumber(numbers) {
  // Iterate through each element in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is divisible by 2 (even)
    if (numbers[i] % 2 === 0) {
      return true;
    }
  }
  // Return false if no even numbers were found
  return false;
}

// Sample tests
console.log(hasEvenNumber([1, 3, 5, 8])); // true
console.log(hasEvenNumber([1, 3, 5, 7])); // false