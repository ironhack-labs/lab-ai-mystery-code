// Case 1: The Infinite Loop

// Checks whether the array contains at least one even number.
function containsEvenNumber(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    // An even number has no remainder when divided by 2.
    if (numbers[index] % 2 === 0) {
      return true;
    }
  }

  // The entire array was checked and no even number was found.
  return false;
}


// Case 2: The Cryptic Function

// Checks whether a word reads the same forwards and backwards.
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");

  return reversedWord === word;
}


// Case 3: The Over-Engineered Mess

// The original loop added 1 to the first number a total of secondNumber times.
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
