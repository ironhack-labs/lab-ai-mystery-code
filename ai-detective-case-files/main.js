// Function: Checks if the array contains at least one even number
function hasEvenNumber(arr) {
  let i = 0;

  // Loop through each element in the array
  while (i < arr.length) {
    // If the current element is even, return true
    if (arr[i] % 2 === 0) {
      return true;
    }

    // Move to the next element to avoid infinite loop
    i++;
  }

  // If no even number is found, return false
  return false;
}

// Test
console.log(hasEvenNumber([1, 3, 5])); // false
console.log(hasEvenNumber([1, 4, 7])); // true
console.log(hasEvenNumber([]));        // false


// Function: Checks if a string is a palindrome (reads the same backward and forward)
function isPalindrome(text) {
  // Split the string into characters, reverse them, and join back
  const reversed = text.split('').reverse().join('');

  // Compare reversed version with the original string
  return reversed === text;
}

//Test
console.log(isPalindrome("level")); // true
console.log(isPalindrome("mateo")); // false
console.log(isPalindrome("madam")); // true


// Function: Returns the sum of two numbers (a + b)
function add(a, b) {
  return a + b;
}

//Test
console.log(add(2, 3));   // 5
console.log(add(10, -2)); // 8