// Case 2: The Cryptic Function (refactored)
// This function checks if a string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
  // Split the string into an array, reverse it, and join it back
  const reversed = str.split('').reverse().join('');
  // Compare the reversed string to the original
  return reversed === str;
}

// Example usage:
// console.log(isPalindrome('racecar')); // true
// console.log(isPalindrome('hello'));   // false
