### Case 1: Infinite Loop

:brain: Prompt used: “Why doesn't the loop work correctly ?”
:robot: AI suggested: Add `i++` at the end of loop.
:bulb: We don't increment i, because of this we were still checking the first element of the array

:white_check_mark: Fix: Added `i++` and explained loop logic with comments.


### Case 2: The Cryptic Function

:brain: Prompt used: “Can you explain to me what this fonction does ?”
:robot: AI response: The function splits the string into an array, reverses the order of the elements and joins them back into a string. Then it checks if the result is equal to the initial string
:bulb: The function checks if the string is a palindrome, but the names of the function and the variable are not descriptives

:white_check_mark: Fix: Change the names of the function and the parameter

### Case 3: The Over-Engineered Mess

:brain: Prompt used: “Can you explain to me what this fonction does and simplify it ?”
:robot: AI response: The function adds `b` to `a`, unless `b` is lower than 0, in which case it just returns `a`. In the function, `y` is modified but never used
:bulb: The function doesn't use `y`, and performs the addition with a loop instead of using `+` and a condition.

:white_check_mark: Fix: We removed `y` from the function and simplified it into a simple equation.
