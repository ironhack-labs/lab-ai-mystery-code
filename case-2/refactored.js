function isPalindrome(word) {
  // convert the word into an array of characters
  const characters = word.split('');

  // reverse the array
  const reversedCharacters = characters.reverse();

  // join the characters back into a string
  const reversedWord = reversedCharacters.join('');

  // compare original word with reversed word
  return reversedWord === word;
}