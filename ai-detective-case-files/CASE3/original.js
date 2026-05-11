
// Case 3: The Over-Engineered Mess ###########################
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

// it basically does add two numbers (a, b), but not even correct when working with negative numbers

const retVal = complicatedCalc(3, -8)
console.log("complicatedCalc = ", retVal)