### Case 3: The Over-Engineered Mess

:brain: Prompt used: “Simplify this function in plain JavaScript. What’s the intent?”
:robot: AI suggested: reduce the loop to a direct arithmetic expression because the loop only changes a value that is later returned.
:bulb: My Insight: The original code was doing unnecessary work; it repeatedly increased `x` and decreased `y`, but only `x` mattered.

:white_check_mark: Fix: Replaced the loop with a direct calculation and added comments explaining the original intent.
