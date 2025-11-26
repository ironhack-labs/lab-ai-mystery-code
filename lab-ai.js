/**
 * This code is to check if there is atleast one even number inside the array,
 * but before, we had a bug, the the index variable never incremented, and this
 * created an inifite loop because it will always inferior to the length infinitely.
 * To solve tha bug, i'd just incremented the index each times.
 */
let arr = [1, 2, 3];
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

console.log(mystery1(arr));

/**
 * This code is too check if the string that we have in the arguments can be reverse and be the same thing, it's the principal of palindrome
 * I see severals problems:
 * 1. The name of te funciton is too short and dosen't tell what the function do, it's better to name it isPalindrome
 * 2. The same with the name of the parameter, we can raname it as "str" or "string" to avoid any conversion of implicites types.
 * 3. The comparsion not strict, it is better to use strict comparaison "===" to
 */
let name = "David Bouhaben";
function isPalindrome(str) {
  return str.split("").reverse().join("") == str;
}
console.log(isPalindrome(name));

/**
 * This function simply increments the variable 'a' until it reaches the value of 'b', but to complicated
 */
const add = (a, b) => a + b;
