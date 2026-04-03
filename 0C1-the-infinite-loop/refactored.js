//CASE 1 Refactored Code

function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    
    if (arr[i] % 2 === 0) {
      return true; 
    }
    i++; //Increment counter to move to next element
  }
}
  return false;


  //Test

console.log(mystery1([1, 3, 5])); 
console.log(mystery1([2, 4, 6]));     
console.log(mystery1([1, 2, 3]));
console.log(mystery1([11, 22, 66, 99]));