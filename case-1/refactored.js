// Case 1: The Infinite Loop
// Problem: the loop never increments `i`, so it keeps checking the same array index forever.
function hasEvenNumber(values) {
  // Check each item in the array one by one.
  for (let index = 0; index < values.length; index += 1) {
    const currentValue = values[index];

    // If the value is even, return immediately.
    if (currentValue % 2 === 0) {
      return true;
    }
  }

  // No even number was found.
  return false;
}

module.exports = { hasEvenNumber };
