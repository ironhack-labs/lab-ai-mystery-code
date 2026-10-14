// Case 3: This function adds the value of b to a.
// The original loop was unnecessarily repeating the same operation:
// x = x + 1 repeated b times, which is equivalent to a + b.
const addNumbers = (a, b) => a + b;

module.exports = { addNumbers };
