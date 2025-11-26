// ORIGINAL (BUGGY VERSION)
// Problem: sort() without a compare function converts numbers to strings
// Example: [10, 5, 40, 25] becomes [10, 25, 40, 5] ❌
function sortNumbers(arr) {
  return arr.sort();
}

// FIXED VERSION
// Solution: Provide a compare function (a, b) => a - b for numerical sorting
// Example: [10, 5, 40, 25] becomes [5, 10, 25, 40] ✅
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}