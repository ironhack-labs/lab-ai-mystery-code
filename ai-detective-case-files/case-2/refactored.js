// This function checks whether a word is a palindrome.
// A palindrome reads the same forwards and backwards.
function isPalindrome(word) {
  // Reverse the word.
  const reversedWord = word.split("").reverse().join("");

  // Compare the reversed word with the original.
  return reversedWord === word;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("anna"));    // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true