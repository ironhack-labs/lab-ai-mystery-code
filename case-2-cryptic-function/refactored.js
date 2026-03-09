// CASE 2: Fixed - Check if string is a palindrome (reads same forwards and backwards)
function isPalindrome(str) {
  // Split string into characters, reverse them, join back together
  const reversed = str.split('').reverse().join('');
  
  // Compare if original equals reversed
  return reversed === str;
}

// Test cases
console.log(isPalindrome('hello'));     // false (not a palindrome)
console.log(isPalindrome('racecar'));   // true (reads same both ways)
console.log(isPalindrome('a'));         // true (single letter is palindrome)
console.log(isPalindrome('ab'));        // false (different forwards/backwards)
console.log(isPalindrome('noon'));      // true (palindrome)
console.log(isPalindrome('level'));     // true (palindrome)
