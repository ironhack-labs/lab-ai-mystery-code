//Case 1: The Infinite Loop
//Fix the logic. Test it with sample arrays.

//Corrected version:
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; // Ergänzte Zeile:
    // Laufvariable wird in der Schleife inkrementiert
  }
  return false;
}

//Testing
console.log(mystery1([1, 77, 3, 5, 19, 125])); // false
console.log(mystery1([1, 22.4, 5])); //false
console.log(mystery1([27, 1, 13, 2, 9])); //true
console.log(mystery1([3, 91, 0])); // true
console.log(mystery1([])); // false

//Case 2: The Cryptic Function
//Renamed version:
function isPalindrome(strng) {
  return strng.split("").reverse().join("") == strng;
}

//2.1 Decode what this function is really doing.
/* It checks, whether a given string is a palindrome:
- split() turns string into an array of characters: ["e", "x", "a", "m", "p", "l", "e"]
- reverse() reverses the array -> ["e", "l", "p", "m", "a", "x", "e"]
- join() turns it back into a string -> "elpmaxe"
- == comparison with the original string delivers a true in case of equality, otherwise false*/

//2.3 Add comments and reformat it to be readable.
// Checks if a given string is a palindrome
// (reads the same forwards and backwards)
function isPalindrome(strng) {
  // Step 1: Convert string into an array of characters
  // "example" → ["e","x","a","m","p","l","e"]
  const characters = strng.split("");

  // Step 2: Reverse the array of characters
  // ["e","x","a","m","p","l","e"] -> ["e", "l", "p", "m", "a", "x", "e"]
  const reversedCharacters = characters.reverse();

  // Step 3: Join the reversed array back into a string
  const reversedString = reversedCharacters.join("");
  // ["e", "l", "p", "m", "a", "x", "e"] -> "elpmaxe"

  // Step 4: Compare reversed string with original string
  // If they are equal, it is a palindrome -> return true
  return reversedString === strng;
}

//Case 3: The Over-Engineered Mess

// Refactor it to a one-liner (if possible)
const complicatedCalc = (a, b) => a + b;


