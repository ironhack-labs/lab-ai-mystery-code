function checkPalindrome(string) {
    // Get the string argument, split each letter into an array, reverse the array, and then join it back into a string.
    const reversedStr = string.split('').reverse().join("")
    // Compare the reversed version of the string with the original string to check if they are the same.
    return reversedStr === string; // Return true if the condition is met, otherwise false
}