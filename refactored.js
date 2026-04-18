//*  Case 1: The Infinite Loop

//used the for loop to loop through a given array to find even numbers
function containsEvenNumber (arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      return true;
    }
  }

return false;

}


//* Case 2: The Cryptic Function

function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split('').reverse().join('');

  // Compare original with reversed
  return reversed === str;
}



//* Case 3: The Over-Engineered Mess

// Reverse the string
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');

  // Comparing original with reversed
  return reversed === str;
}




//* Bonus Challenge: Rogue Snippet Hunt


for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// The loop uses var, which is function-scoped, not block-scoped.
// So every callback references the same i, which is now 5.


for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//  Logs numbers 0–4 with a delay
//  Uses block-scoped variable to preserve value per iteration