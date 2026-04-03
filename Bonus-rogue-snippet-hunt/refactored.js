//BONUS Comparable function


function findLongestWord(arr) {
  let longestWord = "";

  for (let i = 0; i < arr.length; i++) {

    //changed the longestWord to longestWord,length
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(["cat", "elephant", "dog", "butterfly"]));