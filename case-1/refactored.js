function mystery1(arr) {
  let i = 0;  // start at the first index of the array
  while (i < arr.length) {  // loop through each element in the array
    if (arr[i] % 2 === 0) { // check if the current number is even
      return true; // if an even number is found, stop and return true
    }
    i++ // move to the next element to avoid an infinite loop
  }
  
  return false; // // return false if no even numbers were found
  
}