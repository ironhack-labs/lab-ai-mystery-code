

/*

This is just a very complicated way of doing:

return a + b;

function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}


*/

function complicatedCalc(a, b) {
    return a + b;
}