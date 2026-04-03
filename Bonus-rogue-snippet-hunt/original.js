// BONUS  Incomparable Code

function findLongestWord(arr) {
  let longestWord = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(["cat", "elephant", "dog", "butterfly"]));