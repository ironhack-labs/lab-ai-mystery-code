// Case 1: The Infinite Loop (refactored)
//
// The BUG: the original `while` loop never changed `i`, so when the first
// element was odd the condition `i < arr.length` stayed true forever and the
// function hung. It only ever escaped if arr[0] happened to be even.
//
// The INTENT: return true if the array contains at least one even number.

/**
 * Checks whether an array contains at least one even number.
 * @param {number[]} arr - array of numbers to scan
 * @returns {boolean} true if any element is even, otherwise false
 */
function hasEvenNumber(arr) {
  // Walk every index; `i++` guarantees we make progress and eventually stop.
  for (let i = 0; i < arr.length; i++) {
    // `% 2 === 0` is true for even numbers.
    if (arr[i] % 2 === 0) {
      return true; // found one — no need to keep looking.
    }
  }
  return false; // scanned everything, found nothing even.
}

// Idiomatic modern equivalent (same behaviour, one line):
const hasEvenNumberShort = (arr) => arr.some((n) => n % 2 === 0);

// --- Quick tests ---
console.log(hasEvenNumber([1, 3, 5]));    // false
console.log(hasEvenNumber([1, 2, 3]));    // true
console.log(hasEvenNumber([]));           // false
console.log(hasEvenNumberShort([7, 8]));  // true

export { hasEvenNumber, hasEvenNumberShort };
