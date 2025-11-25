// Check if a given text is a palindrome
function isPalindrome(text) {
  // Split the text into individual characters
  const characters = text.split("");

  // Reverse the order of the characters
  const reversedCharacters = characters.reverse();

  // Join the reversed characters back into a string
  const reversedText = reversedCharacters.join("");

  // Compare the original and reversed text
  return reversedText === text;
}

// Sample tests
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
