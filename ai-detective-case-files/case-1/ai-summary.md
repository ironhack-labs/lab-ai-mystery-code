### Case 1: Infinite Loop

:brain: Prompt used: “What this function does?”
:robot: AI suggested: To make the function work as intended (checking the whole array for an even number), you need to increment the index
:bulb: My Insight: This function is wrong because it never increments
the variable i, it stays always in 0. Thus, if arr[0] is
even, then function return true. But if arr[0] is odd, the 
while loop keeps running forever because the condition
i < arr.length is never true.

:white_check_mark: Fix: Added `i++` and explained loop logic with comments.