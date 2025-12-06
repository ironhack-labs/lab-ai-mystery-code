// function mystery1(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// ❌ What’s wrong with this code?
// 1. The while loop never increments i
//    → i stays 0 forever → infinite loop → the function never finishes.
//
// 2. The logic should check every number
//    → but since i never changes, it only checks arr[0].

// ✅ Corrected version
function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true; // found an even number
    }
    i++; // increment i so the loop progresses
  }

  return false; // no even number found
}
