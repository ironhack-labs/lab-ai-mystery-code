function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    //infinite loop {i} was never updated, stays 0 forever
    if (arr[i] % 2 === 0) {
      //on checks arr[0] because [i] was never updated
      return true;
    }
  }
  return false;
}

function q(q) {
  return q.split("").reverse().join("") == q;
}
// loose equality == instead ===
//poor variable naming function(q)

function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}
/*doing repeated addition, but:
it's unnecessary
inefficient
breaks for negative numbers*/
