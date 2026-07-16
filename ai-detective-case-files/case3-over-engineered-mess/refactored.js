// Case 3: The Over-Engineered Mess (refactored)
//
// What it really does: the loop runs `b` times, adding 1 to `x` each time.
// `x` starts at `a`, so after `b` iterations x === a + b. (The variable `y`
// is decremented but never used or returned — pure dead code.)
//
// So the whole function is just addition.

/**
 * Adds two numbers.
 * @param {number} a - first number (starting value)
 * @param {number} b - second number (how many times we add 1)
 * @returns {number} the sum a + b
 */
const add = (a, b) => a + b;

// --- Quick tests (should match the original's output) ---
console.log(add(5, 3));  // 8
console.log(add(10, 0)); // 10
console.log(add(0, 4));  // 4

export { add };
