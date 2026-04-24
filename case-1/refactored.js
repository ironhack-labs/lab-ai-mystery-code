// Checks if an array contains at least one even number

function hasEvenNumber(numbers) {
  let index = 0;

  // Go through each number in the array
  while (index < numbers.length) {
    // If number is even, return true
    if (numbers[index] % 2 === 0) {
      return true;
    }

    // Move to next position
    index++;
  }

  // No even numbers found
  return false;
}