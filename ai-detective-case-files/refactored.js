// Case 1: The Infinite Loop
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
// Need i++ to end the loop

//  Case 2: The Cryptic Function
function palindrome(word) {
  let characters = word.split("");
  let reversedChar = characters.reverse();
  let reversedWord = reversedChar.join("");

  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}
/*    - split() is used to split every character using an empty string.
      - reverse() is used to reverse the array.
      - join() will join the array back into a string without any quotes or comas. */

// Case 3: The Over-Engineered Mess
function complicatedCalc(a, b) {
  return a + b;
}
