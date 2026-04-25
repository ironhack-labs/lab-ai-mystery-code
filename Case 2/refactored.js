// This function checks if a word is a palindrome (same forwards and backwards)

function isPalindrome(word) {
  // Reverse the word and compare it to the original
  return word.split('').reverse().join('') === word;
}