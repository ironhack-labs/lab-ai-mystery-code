### Case 1: Infinite Loop

:brain: Prompt used: "What’s wrong with this JS loop? Explain and fix it."
:robot: AI suggested: Add an increment to the loop counter so it moves through the array.
:bulb: My Insight: The function was checking for an even number but never advancing the index, which created an infinite loop.

:white_check_mark: Fix: Replaced the while loop with a for loop and added `i++` so each array item is checked once.
