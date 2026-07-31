// 🗂️ Case 1: The Infinite Loop

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++ // this was the missing part, because it's not increasing it's inifinitly at 0 
  }
  return false;
}

let Arraytest = [1,2,3,4,5]
console.log(mystery1(Arraytest))



// 🗂️ Case 2: The Cryptic Function


function makePalindrome(text) { // function renamed to "makePalindrome" 
  const reversedText = text.split('').reverse().join(''); // it reverses the order of the letter of the string (text)
  return reversedText === text;
} 


// 🗂️ Case 3: The Over-Engineered Mess

// function complicatedCalc(a, b) {
//   let x = a;
//   let y = b; // unnecessary to declare these. they are parameters already 

//   for (let i = 0; i < b; i++) { //     Runs b times → x + b
//     x = x + 1;  // actually this is a = a + (1 * b)
//     y = y - 1;
//   }
//   return x; in the end is just: a + (1 * b) = a + B
// }

function add(a, b) {
  return a + b;
}