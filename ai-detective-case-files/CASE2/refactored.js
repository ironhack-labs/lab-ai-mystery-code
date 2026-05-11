
// rewriting to be readable
/**
 * Finds the first index of a target value in an array.
 * @param {Array} list - The array to search through.
 * @param {*} targetValue - The value to look for.
 * @returns {number} The index of the value if found, otherwise -1.
 */
function findFirstIndex(list, targetValue) {
    let index = 0;

    while (index < list.length) {
        // Check if current element matches the target
        if (list[index] === targetValue) {
            return index; // Return the position immediately
        }
        
        index++; // Move to the next item
    }

    // Return -1 if the loop completes without a match
    return -1;
}

// Example usage:
const fruits = ["apple", "banana", "cherry"];
console.log(findFirstIndex(fruits, "banana")); // Output: 1
console.log(findFirstIndex(fruits, "pear"));   // Output: -1

