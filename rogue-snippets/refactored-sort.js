/**
 * This code is not good and have a bug, the sort() method without a compare function 
 * converts numbers to strings and sorts them alphabetically, NOT numerically.
 * For example: [10, 5, 40, 25] becomes [10, 25, 40, 5] which is wrong because it compares 
 * the strings "10" < "25" < "40" < "5" alphabetically.
 * 
 * The solution is to provide a compare function like (a, b) => a - b
 * This will help us to get a true numerical sort instead of alphabetical sort.
 */

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([10, 5, 40, 25, 100, 1]));
