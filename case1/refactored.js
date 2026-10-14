// Case 1: fixed loop that checks whether an array contains any even number.
function hasEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    // If the current item is even, return true immediately.
    if (currentValue % 2 === 0) {
      return true;
    }
  }

  // No even values were found.
  return false;
}

module.exports = { hasEvenNumber };
