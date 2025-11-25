//case1
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

//Case 2
function isPalindrome(str) {

const reversed = str.split('').reverse().join('');

return reversed === str;
}

//case3
const complicatedCalc = (a, b) => a + b;