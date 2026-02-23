function q(q) {
  return q.split("").reverse().join("") == q;
}


// Version mejorada 

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return reversedWord === word;
}