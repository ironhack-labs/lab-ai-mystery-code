// Case 1
// Change the name of the function to a more descriptive name
function hasEvenNumber(arr) {
  // Initialize i with 0
  let i = 0;

  // Iterate over the array until a even number is found
  while (i < arr.length) {
    // If an even number is found return true
    if (arr[i] % 2 === 0) {
      return true;
    }

    // Increase the iteration variable by 1
    i++;
  }

  // In case no even number has been found return false
  return false;
}

// Case 2
// Checks if the provided string is a palindrome
function isPalindrome(str) {
  // Assign the reversed string to a variable
  const reversed = str.split('').reverse().join('');
  // Return true if the reversed string matches the original string perfectly. If not, return false.
  return reversed === str;
}

// Case 3
// The function will sum two provided numbers in case b is a positive number.
// Otherwise it will return just a. The original logic is preserved.
const addPositiveValue = (a, b) => (b > 0 ? a + b : a);