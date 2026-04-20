function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }

    i++;
  }

  return false;
} //Check if the array contains at least one even number

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
} //It checks if a string is a palindrome (same forward and backward) examples,
// madam   → madam
//racecar → racecar
//level   → level
//not isPalindromes
//hello → olleh
//world → dlrow
/*function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}*/

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

//simplified version
function complicatedCalc(a, b) {
  return a + b;
}
