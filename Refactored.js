

// ***** CASE- 1 MY SOLUTION *****//
// function mystery1(arr) {
// let i = 0;
//  while (i < arr.length) {
//   if (arr[i] % 2 === 0) {
//      return true;
//    }
//    i++;
//  }
// return false;
//}

// ***** CASE- 1 AI SOLUTION *****//

function mystery1(arr) {
  return arr.some(n => n % 2 === 0);
}

// ***** CASE- 2 MY SOLUTION *****//

// q.split('') - split into array
// .reverse()- array method
// .join('') - I think join the array
// ==q compares the string

// ***** CASE- 2 AI SOLUTION *****//

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

// ***** CASE- 3 MY SOLUTION *****//

function complicatedCalc(a, b) {
  return a + b;
}

// ***** CASE- 3 AI SOLUTION *****//

function complicatedCalc(a, b) {
  return b > 0 ? a + b : a;
}