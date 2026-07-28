function complicatedCalc(a, b) {
  let x = a;
  let y = b;

  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }

  return x;
}

console.log(addNumbers(5, 3));      // 8
console.log(addNumbers(10, 7));     // 17
console.log(addNumbers(100, 25));   // 125