/**
 * Returns true when the provided text reads the same forwards and backwards.
 *
 * A palindrome is unchanged when its characters are reversed.
 */
function isPalindrome(text) {
  const reversedText = text.split('').reverse().join('');

  // Strict equality avoids implicit type conversion.
  return reversedText === text;
}

module.exports = { isPalindrome };
