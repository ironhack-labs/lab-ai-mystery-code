// Case 1: The Infinite Loop:
// Function that checks if an array contains at least one even number.
// Returns true if an even number is found, otherwise returns false.
function mystery1(arr) {
  let i = 0; // start from the first element
  while (i < arr.length) {
    // check if the current element is even
    if (arr[i] % 2 === 0) {
      return true; // found an even number, exit function
    }
    i++; // move to the next element to avoid infinite loop
  }
  return false; // no even numbers found in the array
}
// Tests
console.log(mystery1([1, 3, 5])); // false, no even numbers
console.log(mystery1([1, 4, 5])); // true, found 4
console.log(mystery1([]));        // false, empty array


// Case 2: The Cryptic Function:
// Function that checks if a string is a palindrome
function isPalindrome(str) {
  // Convert the string to an array of characters, reverse it, and join back into a string
  const reversed = str.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return reversed === str; // return true if palindrome, false otherwise
}
// Tests
console.log(isPalindrome("radar"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("level"));  // true


// Case 3: The Over-Engineered Mess:
// Arrow function version
const complicatedCalc = (a, b) => a + b; // return the sum of a and b

// Simplified version of the function: just adds two numbers
// function complicatedCalc(a, b) {
//   return a + b;
// }

// Tests
console.log(complicatedCalc(5, 3)); // 8
console.log(complicatedCalc(10, 0)); // 10
console.log(complicatedCalc(-2, 7)); // 5