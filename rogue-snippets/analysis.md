### Bonus Challenge: The Broken Number Sort

Prompt used: "What does this code do and what's the problem with it?"

AI suggested: The sort() method without compare function sorts numbers as strings, not numerically. You need to add (a, b) => a - b as parameter.

My Insight: When i tested with [10, 5, 40, 25], the result was [10, 25, 40, 5] which is wrong. I realized that JavaScript converts the numbers to strings and then sort them alphabetically like "1" < "10" < "25" < "40" < "5". That's why we need to provide a compare function to sort numerically.

Fix: Added the compare function (a, b) => a - b to sort numbers correctly in ascending order.
