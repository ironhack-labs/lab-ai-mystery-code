function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; //This makes the code move to the next iteration.(We had an infinite Loop earlier!)
  }
  return false;
}