// This function checks whether an array contains at least one even number
function containsEvenNumber(arr) {
  // Start at the first element.
  let i = 0;

  // Keep checking while there are still elements in the array.
  while (i < arr.length) {
    // If the current number is even, return true immediately.
    if (arr[i] % 2 === 0) {
      return true;
    }

    // Move to the next element.
    i++;
  }

  // If no even numbers were found, return false.
  return false;
}