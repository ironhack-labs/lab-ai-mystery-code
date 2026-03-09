// CASE 3: Fixed - Simply add two numbers
function addTwoNumbers(firstNum, secondNum) {
  // Just add the two numbers together
  // The original loop was adding firstNum + secondNum in steps
  return firstNum + secondNum;
}

// Test cases
console.log(addTwoNumbers(5, 3));     // 8 (5 + 3)
console.log(addTwoNumbers(10, 2));    // 12 (10 + 2)
console.log(addTwoNumbers(1, 1));     // 2 (1 + 1)
console.log(addTwoNumbers(0, 5));     // 5 (0 + 5)

// Why the original was overcomplicated:
// It used a loop to add 1 to x and subtract 1 from y, b times
// This is just adding b to a... which can be done in one line!
