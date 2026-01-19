
// The  function checks if a string is a palindrome (reads the same forwards and backwards).
// naming the function and parameter the same (q(q)) is confusing and bad practice — it makes the code harder to read and maintain.

/*

function q(q){
    return q.split('').reverse().join('')==q
}

*/


function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

/*

str.split('')   ->      "racecar" → ["r","a","c","e","c","a","r"]
.reverse()      ->      ["r","a","c","e","c","a","r"] → ["r","a","c","e","c","a","r"]
.join('')       ->      ["r","a","c","e","c","a","r"] → "racecar"

*/  