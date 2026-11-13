// Converts any value into its strict boolean equivalent
const isUserActive = (isActive) => Boolean(isActive);

// Sample tests
console.log(isUserActive(true)); // true
console.log(isUserActive(0));    // false