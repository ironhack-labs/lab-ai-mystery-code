// Case 3: The Over-Engineered Mess
// The loop increases `x` by `b` while decreasing `y` by `b`, but `y` is never used.
// That means the function is simply returning the original value plus `b`.
function add(a, b) {
  return a + b;
}

module.exports = { add };
