/********************************************************************************************/
/********************************************************************************************/
/*                                 Caso 1: El bucle infinito                                */
/********************************************************************************************/
/********************************************************************************************/
//  Checks if an array of numbers contains at least one even number.

function containsEvenNumber(arr) {
  // The original function had an infinite loop because the index 'i' was never incremented.
  // We use a standard 'for' loop, which is safer and ensures the index is incremented (i++).
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // Check if the current number is perfectly divisible by 2.
    if (currentNumber % 2 === 0) {
      // Early exit: Return true immediately when the first even number is found.
      return true; 
    }
  }

  // If the loop completes without returning true, no even numbers were found.
  return false;
}
/********************************************************************************************/
/********************************************************************************************/
console.log("/*******************************************/");
console.log("/*************   Test  1   *****************/");
console.log("/*******************************************/");
// --- TEST ARRAYS ---
const testArray1 = [1, 3, 5, 8, 9];    // Expected: true (8 is even)
const testArray2 = [11, 23, 35, 47];   // Expected: false (all odd)
const testArray3 = [];                 // Expected: false (empty array)
const testArray4 = [2, 4];             // Expected: true (all even)

// --- TESTING THE FUNCTION ---
console.log(`Test 1 [1, 3, 5, 8, 9]: ${containsEvenNumber(testArray1)}`); 
console.log(`Test 2 [11, 23, 35, 47]: ${containsEvenNumber(testArray2)}`); 
console.log(`Test 3 []: ${containsEvenNumber(testArray3)}`); 
console.log(`Test 4 [2, 4]: ${containsEvenNumber(testArray4)}`);
/********************************************************************************************/
/********************************************************************************************/
/*                                 Caso 2: La función críptica                              */
/********************************************************************************************/
/********************************************************************************************/
/*
    Checks if the input string is a palindrome.
    A palindrome reads the same forwards and backwards.
*/
function isPalindrome(text) {
  // Step 1: Split the input string into an array of individual characters.
  const charactersArray = text.split('');

  // Step 2: Reverse the order of elements in the new array.
  const reversedArray = charactersArray.reverse();

  // Step 3: Join the array elements back into a single string.
  const reversedText = reversedArray.join('');

  // Step 4: Compare the reversed string with the original string.
  // The function returns true only if they are identical.
  return reversedText === text;
}

/********************************************************************************************/
/********************************************************************************************/
// --- USAGE EXAMPLES (Testing the function) ---
console.log("/*******************************************/");
console.log("/*************   Test  2   *****************/");
console.log("/*******************************************/");
const word1 = "level"; // Palindrome
const word2 = "radar"; // Palindrome
const word3 = "hello"; // Not a palindrome

console.log(`'${word1}' is palindrome: ${isPalindrome(word1)}`); // Output: true
console.log(`'${word2}' is palindrome: ${isPalindrome(word2)}`); // Output: true
console.log(`'${word3}' is palindrome: ${isPalindrome(word3)}`); // Output: false

/********************************************************************************************/
/********************************************************************************************/
/*                      Caso 3: El desastre excesivamente diseñado                          */
/********************************************************************************************/
/********************************************************************************************/
/*
    Calculates the sum of two input numbers.
    This is the clear, traditional JavaScript implementation of the operation 
    hidden within the original over-engineered function.
 */
function calculateSum(a, b) {
  return a + b;
}

/********************************************************************************************/
/********************************************************************************************/
// --- USAGE EXAMPLES ---

// Example 1: Simple addition
console.log("/*******************************************/");
console.log("/*************   Test  3   *****************/");
console.log("/*******************************************/");
const num1 = 15;
const num2 = 7;
const result1 = calculateSum(num1, num2); // Expected: 22
console.log(`The sum of ${num1} and ${num2} is: ${result1}`); 

// Example 2: Addition with zero
const result2 = calculateSum(50, 0); // Expected: 50
console.log(`The sum is: ${result2}`);

// Example 3: Addition with negative numbers
const result3 = calculateSum(20, -15); // Expected: 5
console.log(`The sum is: ${result3}`);
//