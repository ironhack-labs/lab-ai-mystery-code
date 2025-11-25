### Case 1: Infinite Loop

**Prompt used:**  
“What’s wrong with this JS loop? Explain and fix it.”

**AI suggested:**  
The loop never incremented `i`, causing an infinite loop. The intended behavior was to check if the array contained any even number.

**My Insight:**  
A loop without updating the index will never move forward. The logic was correct (checking even numbers), but the control flow was broken.

**Fix Applied:**  
Added `i++` inside the loop, renamed the function to `hasEvenNumber` for clarity, added comments in plain English, and tested with sample arrays.
