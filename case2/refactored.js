// Funktion prüft ob ein Wort ein Palindrom ist (von vorne und hinten gleich gelesen)
function isPalindrome(text) {
  // Das Wort wird erst in Buchstaben zerlegt, umgedreht und wieder zusammengefügt
  const reversedText = text.split('').reverse().join('');
  
  // Wenn das umgedrehte Wort dem alten entspricht, ist es ein Palindrom
  return reversedText === text;
}