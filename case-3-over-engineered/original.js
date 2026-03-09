// CASE 3: The Over-Engineered Mess (OVERCOMPLICATED CODE)
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

// Test cases
console.log(complicatedCalc(5, 3));    // What should this return?
console.log(complicatedCalc(10, 2));   // What should this return?
console.log(complicatedCalc(1, 1));    // What should this return?
