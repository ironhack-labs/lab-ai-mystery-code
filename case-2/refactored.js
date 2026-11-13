// Checks whether a given string is a palindrome (reads the same forwards and backwards)
function isPalindrome(text) {
  // Split the string into an array of characters, reverse it, and join it back together
  const reversedText = text.split('').reverse().join('');

  // Compare the original string with the reversed string using strict equality
  return text === reversedText;
}

// Sample tests
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false