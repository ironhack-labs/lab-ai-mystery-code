### Case 1: Infinite Loop

:brain: Prompt used: “What’s wrong with this JS loop? Explain and fix it.”
:robot: AI suggested: add `i++` and use a clearer loop structure.
:bulb: My Insight: The loop was stuck because `i` never changed, so the code repeatedly checked the same element.

:white_check_mark: Fix: Rewrote the function to iterate through the array safely and return true as soon as it finds an even value.
