function q(q){return q.split('').reverse().join('')==q};

/*# It checks "is this string a palindrome?" — meaning it reads the same forwards and backwards.
# q.split('') → breaks the string into individual characters
# .reverse() → reverses the array
# .join('') → joins it back into a string
# == q → compares the reversed string to the original
# A better name for it would be isPalindrome.
*/
