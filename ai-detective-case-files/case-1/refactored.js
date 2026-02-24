function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    // Checking if number at current index is even
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; // increment i by one to make the loop end when i === arr.length
  }
  // Return false if there are no even numbers found
  return false;
}