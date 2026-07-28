### Case 1: Infinite Loop

:brain: Prompt used: “Why is this loop never ending?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: It was checking even numbers but never moving forward.

:white_check_mark: Fix: Added `i++` and explained loop logic with comments.


### Case 2: The Cryptic Function

:brain: Prompt used: 'Explain this function step-by-step and suggest better variable names.”

:robot: AI suggested: q.split('') — splits the input string into an array of individual characters.
Example: "level" → ['l', 'e', 'v', 'e', 'l']
.reverse() — reverses that array in place.
Example: ['l', 'e', 'v', 'e', 'l'] → ['l', 'e', 'v', 'e', 'l'] (same in this case, but for "abc" it'd become ['c','b','a'])
.join('') — joins the reversed array back into a string.
Example: ['l', 'e', 'v', 'e', 'l'] → "level"
== q — compares the reversed string to the original string. If they're equal, the original was a palindrome, so it returns true; otherwise false.

Note: the function name and the parameter are both named q, which is legal in JS (the parameter shadows the outer function's name inside the function body) but very confusing to read.

:bulb: My Insight: I am able to understand array's method not a issue.

:white_check_mark: Fix: Added 'Variable names and proper function name.

### Case 3: The Over-Engineered Mess

:brain: Prompt used: “Simplify this function in plain JavaScript. What’s the intent?”


:robot: AI suggested a loop-based increment is functionally equivalent to plain addition, just far slower (O(b) instead of O(1)) and harder to read.

One thing worth flagging: if b is negative, the original loop never executes (since i < b is false immediately when b < 0), so it would return a unchanged — not a + b. If preserving that exact edge-case behavior matters, you'd want.

:bulb: My Insight: Exact edge-case behavior matters.

:white_check_mark: Fix: Loop based increment is functionally equivalent to plain addtion..