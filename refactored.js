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
function palindromeCheck(word){
    
    return word
    .split('') //splits the string into an array of characters
    .reverse() //reverses the order of the array elements
    .join('') //joins the characters back into a string
    ===word; // compares the reversed string with the original
}
function complicatedCalc(a, b) {
  return a + b;
}

