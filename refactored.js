// case1
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
      i++; // 👈 add this
    }
  }
  return false;
}

//case 2
function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

//case 3
const add = (a, b) => a + b;