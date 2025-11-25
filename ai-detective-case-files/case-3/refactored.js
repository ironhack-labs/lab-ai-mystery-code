/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The sum of a and b
 */
function add(a, b) {
  return a + b;
}
// Refactored to use arrow function syntax
const add = (a, b) => a + b;

// Test cases:
console.log(add(5, 3));    // 8
console.log(add(10, 7));   // 17
console.log(add(0, 5));    // 5
console.log(add(-3, 8));   // 5
