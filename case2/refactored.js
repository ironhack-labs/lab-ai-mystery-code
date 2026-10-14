// Case 2: This function checks whether a string reads the same
// forwards and backwards. That is the definition of a palindrome.
// Example: "racecar" is a palindrome, but "hello" is not.
function isPalindrome(inputString) {
  // Make sure the input is a string so we can safely use string methods.
  if (typeof inputString !== 'string') {
    throw new TypeError('isPalindrome expects a string input');
  }

  // Split the string into individual characters.
  // Reverse the characters.
  // Join them back together to create the reversed version.
  const reversedString = inputString.split('').reverse().join('');

  // Compare the reversed version with the original string.
  return reversedString === inputString;
}

module.exports = { isPalindrome };
