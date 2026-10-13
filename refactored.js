//Case 1: The Infinite Loop
//Function checks if there is an even number in the array
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

const testArr = [2,5,8,9,15,22];
console.log(mystery1(testArr)); //Should return true

//Case 2: The Cryptic Function
//Function tests if a given string is a palindrome
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === [...cleaned].reverse().join('');
}

const palWord = 'Racecare'; 
const palWord2 = 'Racecar'; 
console.log(isPalindrome(palWord));//Should return false
console.log(isPalindrome(palWord2))//Should return true

//Case3: The Over-Engineered Mess
//Function adds a and b
function add (a, b) {return a + b;}


