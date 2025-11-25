function checkPalindrome(text) {
  // Split the string into an array of characters
  const characters = text.split('');
  
  // Reverse the array of characters
  const reversed = characters.reverse();
  
  // Join the reversed array back into a string
  const reversedText = reversed.join('');
  
  // Compare original string with reversed string using strict equality
  return reversedText === text;
}

// Alternatively, a more concise (but still readable) version:
function isPalindrome(text) {
  // Reverse the string and compare with original
  const reversedText = text.split('').reverse().join('');
  return reversedText === text;
}

// Test examples:
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("level"));    // true