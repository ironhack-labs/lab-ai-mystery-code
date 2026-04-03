//CASE 2 Refactored Code

function isPalindrome(str) {
    //changed the name of function and the argument so it can be understandable

  return str.split('').reverse().join('') === str;
}

//Test
console.log(isPalindrome("racecar")) 
console.log(isPalindrome("madam"))
console.log(isPalindrome("monstera"))   