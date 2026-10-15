### Case 1: Infinite Loop
:brain: Prompt used: “Why is this loop never ending?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: It was checking even numbers but never moving forward.
:white_check_mark: Fix: Added `i++`

### Case 2 : The Cryptic Function 
:brain: Prompt used: “Why is the letter “q” used so many times. 
:robot: AI suggested: It's a function to check if a word is a palindrome.
:bulb: My Insight: Parameter `q` shadowed the function name; it's also case-sensitive. :white_check_mark: Fix: Renamed variables, used `===`, added a version ignoring case and punctuation.

### Case 3: The Over-Engineered Mess 
:brain: Prompt used: "What does the following function do?" 
:robot: AI suggested: It adds `b` to `a` by looping; `y` is unused. 
:bulb: My Insight: It only matches `a + b` for non-negative whole numbers `b`. 
:white_check_mark: Replaced with `return a + b;`.
