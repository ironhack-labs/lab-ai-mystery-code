// Check if an array contains at least one even number
function hasEvenNumber(arr) {
  // Start checking from the first element
  let i = 0;

  // Loop through the array as long as i is within bounds
  while (i < arr.length) {
    // Get the current element
    const currentNumber = arr[i];

    // If the number is even, return true immediately
    if (currentNumber % 2 === 0) {
      return true;
    }

    // Move to the next element to avoid an infinite loop
    i++;
  }

  // If the loop finishes, no even numbers were found
  return false;
}

// Sample tests
console.log(hasEvenNumber([1, 3, 5, 6])); // true
console.log(hasEvenNumber([1, 3, 5, 7])); // false
console.log(hasEvenNumber([])); // fals
