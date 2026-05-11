
// Case2: The Cryptic Function #####################################

// This function is a Palindrome Checker. It determines if a word or string reads
//  the same backward as it does forward.
function q(q){return q.split('').reverse().join('')==q}


// Example usage:
console.log(q("radar")); // true
console.log(q("hello")); // false