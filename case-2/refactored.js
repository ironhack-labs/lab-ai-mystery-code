// Checks if a word or phrase is a palindrome

function isPalindrome(text) {
  // Reverse the text
  let reversedText = text.split("").reverse().join("");

  // Compare original text with reversed text
  return reversedText === text;
}