// Caso 1: El bucle infinito

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

//Caso 2: La función críptica

function q(q){return q.split('').reverse().join('')==q}

//Caso 3: El desastre excesivamente diseñado

function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

//