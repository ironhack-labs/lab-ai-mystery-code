/**
 * Returns true when the array contains at least one even number.
 *
 * The original loop never changed `i`, so a non-empty array without an
 * even number caused it to run forever. Advancing the index fixes that bug.
 */
function containsEvenNumber(numbers) {
  let index = 0;

  while (index < numbers.length) {
    // Check the current number before moving to the next position.
    if (numbers[index] % 2 === 0) {
      return true;
    }

    // Always advance the loop so every element is examined at most once.
    index += 1;
  }

  return false;
}

module.exports = { containsEvenNumber };
