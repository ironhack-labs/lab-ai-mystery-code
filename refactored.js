// ============================================
// CASE 1: Infinite Loop (FIXED)
// Checks if the array contains at least one even number
// ============================================

function hasEvenNumber(arr) {
  let i = 0; // start index

  while (i < arr.length) {
    // If current number is even → return true
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; // IMPORTANT: Move to next index (was missing!)
  }

  // If loop ends → no even number found
  return false;
}



// ============================================
// CASE 2: Cryptic Function (FIXED)
// Original was checking if a string is a palindrome
// ============================================

function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split("").reverse().join("");

  // Compare original and reversed
  return reversed === str;
}



// ============================================
// CASE 3: Over-Engineered Mess (FIXED)
// Original loop was effectively: return a + b
// ============================================

function add(a, b) {
  // The loop added 1 to `a`, `b` times → a + b
  return a + b;
}
