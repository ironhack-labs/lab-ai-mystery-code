const characters = word.split('');

// Reverse the order of the characters
const reversedCharacters = characters.reverse();

// Join the characters back into a string
const reversedWord = reversedCharacters.join('');

// Compare the reversed word with the original
return reversedWord === word;
}