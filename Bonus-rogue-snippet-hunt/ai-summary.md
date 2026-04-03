### BONUS

:the_problem: The function was comparing two different things.
:brain: Prompt used: "This function finds the longest word but the comparison does not seem right."
:robot: AI suggested: Gave me the hint that comparing two different data types is not logical.
:bulb: My Insight: arr[i].length is a number, and longestWord is a string

:white_check_mark: Fix: Compared arr[i].length to longestWord.length instead of longestWord