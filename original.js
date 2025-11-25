// CASE 1: Infinite Loop
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

// CASE 2: Cryptic Function
function q(q){return q.split('').reverse().join('')==q}

// CASE 3: Over-Engineered Mess
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}
