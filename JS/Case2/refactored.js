function isPalindrome(str) {
  return str === str.split('').reverse().join('');  //Returns true if palindrome, otherwise false
}