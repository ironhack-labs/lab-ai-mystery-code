// Case 1 :

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; // Fix: increment i, otherwise the loop never advances
  }
  return false;
}

// Case 2 :

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

// Case 3 : 

function complicatedCalc(a, b) {
  return b >= 0 ? a + b : a;
}