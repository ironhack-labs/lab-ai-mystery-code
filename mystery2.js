// Original cryptic function:
// function q(q){return q.split('').reverse().join('')==q}

// ❓ What does this function do?
// The function checks whether a string is a palindrome.
// A palindrome is a word that reads the same forward and backward.

// ❌ What’s wrong with the code?
// 1. The function name "q" and parameter "q" are unclear and meaningless.
// 2. The entire function is written on one line, which makes it hard to read.
// 3. No comments explaining the logic.

// ✅ Improved, readable version:
function isPalindrome(word) {
  // Reverse the string: split into characters, reverse, and join back together
  const reversedWord = word.split("").reverse().join("");

  // Return whether the reversed string matches the original
  return reversedWord === word;
}
