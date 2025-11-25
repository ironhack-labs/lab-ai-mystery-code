#
## Case 1: Infinite Loop

:brain: Prompt used: “what the code does and why it's broken?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: If the first element is not even the code gets stuck in an infinite loop because i never changes.

:white_check_mark: Fix: Added `i++`. the loop never moves to the next element, an the function never reaches the return false.


## Case 2: The Cryptic Function

:brain: Prompt used: “Explain this function and what it is doing.”
:robot: AI suggested: Use === instead of == is safer. And better variable names to make the code easier to read.
:bulb: My Insight: It's almost impossible to understand the code when the parameter is equal to the function.

:white_check_mark: Fix: Choosing a better function name and parameter solved the problem of code readability and comprehension.

## Case 3: The Over-Engineered Mess

:brain: Prompt used: “What does this function do?”
:robot: AI suggested: It suggests that this function is equivalent to simply adding a + b.
:bulb: My Insight: Excess variables for the same. 
:white_check_mark: Fix: Simplifying the code.