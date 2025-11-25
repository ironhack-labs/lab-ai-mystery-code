### Case 1: Infinite Loop

:brain: Prompt used: “Why is this loop never ending?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: It was checking even numbers but never moving forward.
:white_check_mark: Fix: Added `i++` and explained loop logic with comments
Inside the loop, `i` never increments, so if the first item is odd, the loop runs forever

### Case 2: The Cryptic Function

brain:  Fix / Improvement: Renamed everything and added clear comments so the purpose is obvious.
robot: AI suggested: It compares the string to its reversed version.
bulb: My Insight: It’s secretly checking if the input is a palindrome.
white_check_mark: Explanation: The original code worked, but the name q(q) gave zero context, making the function look broken or mysterious.

### Case 3:
:brain: Prompt used: “Why is this function so complicated?”
robot: AI suggested: Notice x increases by b → result is just a + b
bulb:My Insight: Variable y does nothing, loop is wasted effort
white_check_mark:Fix: Replaced loop with direct addition for clarity and efficiency
 Explanation: Function was intentionally over-engineered, but the actual logic is simply adding two numbers