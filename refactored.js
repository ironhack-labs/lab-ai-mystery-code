function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true; // Found an even number, we're done!
    }
    i++; // Move to the next index
  }
  return false; // Checked everything and found no even numbers
}


/************************************/


function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr === str;
}


/************************************/


function add(a, b) {
  return a + b;
}