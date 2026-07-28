//*1
function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; 
  }

  return false;
}

//*2
function isPalindrome(word) {
  return word.split('').reverse().join('') === word;
}
// the names suggested by the AI
//=== is preferred over == because it performs a strict comparison without type coercion.

//*3
let sum = (a, b) => a + b;

//AI suggestion:
/* 1- function complicatedCalc(a, b) {
  return a + b;
}*/
/* 2- const complicatedCalc = (a, b) => a + b; */