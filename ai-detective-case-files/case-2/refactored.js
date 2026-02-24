function isPalindrome(word){
    // This function checks if any given word is a palindrome
    // 1. Create a reversed version of the word
    const reversed = word.split('').reverse().join(''); 
    // 2. If the reversed word is the same as the original word,
    // then it's a palindrome.
    return reversed === word;
}