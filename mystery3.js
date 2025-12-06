// Original over-engineered function:
// function complicatedCalc(a, b) {
//   let x = a;
//   let y = b;
//   for (let i = 0; i < b; i++) {
//     x = x + 1;
//     y = y - 1;
//   }
//   return x;
// }

// ❓ What does this function do?
// The function loops b times, and each time it increments x by 1.
// Although the code modifies y, that value is never used.
// After b increments, x ends up being a + b.

// ❌ What’s wrong with the code?
// 1. It uses a loop to do something that can be done with simple addition.
// 2. It introduces unused variables (y).
// 3. It's confusing and overly complicated.

// ✅ Simplified, clear version:
function add(a, b) {
  return a + b;
}
