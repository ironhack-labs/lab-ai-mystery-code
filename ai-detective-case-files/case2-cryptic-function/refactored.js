// Case 2: The Cryptic Function (refactored)
//
// What it really does: it's a PALINDROME check. The confusing part was that
// both the function AND its parameter were named `q`, hiding the intent.
// It reverses the string and compares it to the original.
//
// Improvements:
//   - Meaningful names (`isPalindrome`, `text`).
//   - `===` instead of `==` to avoid loose type coercion.
//   - Comments explaining each step.

/**
 * Returns true if `text` reads the same forwards and backwards.
 * @param {string} text - the string to test
 * @returns {boolean} true if `text` is a palindrome
 */
function isPalindrome(text) {
  const reversed = text
    .split('')    // turn the string into an array of characters
    .reverse()    // reverse that array in place
    .join('');    // join the characters back into a string

  return reversed === text; // same when reversed => palindrome
}

// --- Quick tests ---
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
console.log(isPalindrome('level'));   // true
console.log(isPalindrome(''));        // true (empty string)

export { isPalindrome };
