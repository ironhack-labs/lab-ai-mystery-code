// Case 1: Return true when the array contains at least one even number.
function containsEvenNumber(numbers) {
  for (const number of numbers) {
    if (number % 2 === 0) {
      return true;
    }
  }

  return false;
}

// Case 2: A palindrome reads the same forwards and backwards.
function isPalindrome(text) {
  const reversedText = text.split("").reverse().join("");
  return reversedText === text;
}

// Case 3: Repeatedly adding b to a is equivalent to adding a and b.
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
