### Case 1: Infinite Loop

:brain: Prompt used: "What's wrong with this JavaScript loop? Explain and fix it."

:robot: AI suggested: The loop never changes `i`, so it gets stuck checking the same array element. Incrementing the index or using a `for...of` loop fixes the problem.

:bulb: My insight: The function checks whether an array contains an even number. The early `return true` is correct, but the loop must move to the next element when the current one is odd.

:white_check_mark: Fix: Rewrote the function as `containsEvenNumber` using a readable `for...of` loop.

### Case 2: The Cryptic Function

:brain: Prompt used: "Explain this function step-by-step and suggest better names."

:robot: AI suggested: The function reverses a string and compares it with the original, so it checks whether the string is a palindrome. The strict equality operator is clearer and safer than `==`.

:bulb: My insight: The original function worked, but the names `q` and `q` hid its purpose.

:white_check_mark: Fix: Renamed the function to `isPalindrome`, renamed the value to `text`, and used `===`.

### Case 3: The Over-Engineered Mess

:brain: Prompt used: "Simplify this function in plain JavaScript. What is the intent?"

:robot: AI suggested: The loop adds 1 to `x` exactly `b` times, so the result is `a + b`. The variable `y` is changed but never used.

:bulb: My insight: Extra variables and a loop made a simple addition look more complicated than it is.

:white_check_mark: Fix: Rewrote the function as `addNumbers`, a one-line function that returns `firstNumber + secondNumber`.

### Reflection

AI was most useful for identifying the intent of the obscure functions and pointing out the missing loop update. Reviewing the suggestions helped me choose clearer names and remove unused code instead of copying a solution without understanding it.
