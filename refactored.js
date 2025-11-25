//Case 1: The Infinite Loop

array = [1, 2, 3, 4, 5];

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
console.log(mystery1(array)); //true

//Case 2: The Cryptic Function
function isAPalindrome(word) {
  return word.split("").reverse().join("") === word;
}

console.log(isAPalindrome("racecar")); // true
console.assert(isAPalindrome("aba")); // true
console.log(isAPalindrome("hello")); // false


//Case 3: The Over-Engineered Mess
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3)) // 8
console.log(sum(10, 0)) // 10
console.log(sum(2, 7)) // 9
