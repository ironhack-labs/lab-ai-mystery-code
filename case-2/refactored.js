// Case 2: The Cryptic Function
// This checks whether a string reads the same forwards and backwards.
function isPalindrome(text) {
  // Split the string into individual characters, reverse them, and join them back together.
  const reversedText = text
    .split('')
    .reverse()
    .join('');

  // Compare the reversed result with the original string.
  return reversedText === text;
}

module.exports = { isPalindrome };
