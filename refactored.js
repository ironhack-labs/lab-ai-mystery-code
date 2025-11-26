// Case 1

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; //  we increment i++
  }
  return false;
}

// Case 2

// Returns true if the given string is a palindrome
function isPalindrome(str) {
  // Split the string into characters → reverse them → join back into a string
  const reversed = str.split("").reverse().join("");

  // Compare the reversed string with the original
  return reversed === str;
}

//Case 3
function complicatedCalc(a, b) {
  return a + b;
}
