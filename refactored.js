function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++ //there was not any increase of "i" inside while, so the loop stays infinite
  }
  return false;
} 


function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
} // much better with descriptive names, camelCase and using diferent lines to write the code



function complicatedCalc(a, b) { return a + b }//all that function only says tjat x starts in a and increase b times, so x=a+b, that's all