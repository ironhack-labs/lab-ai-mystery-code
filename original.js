//:card_index_dividers: Case 1: The Infinite Loop
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

console.log(mystery1(array))
//True

//:card_index_dividers: Case 2: The Cryptic Function
function q(q){return q.split('').reverse().join('')==q}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true

//:card_index_dividers: Case 3: The Over-Engineered Mess
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

const complicatedCalc = (a, b) => b > 0 ? a + b : a;
