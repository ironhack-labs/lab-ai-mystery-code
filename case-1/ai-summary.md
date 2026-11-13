### Case 1: The Infinite Loop

🧠 **Prompt used:** "What’s wrong with this JS loop? Explain and fix it."
🤖 **AI suggested:** The loop was missing an increment (`i++`), causing an infinite loop when the first element wasn't even. It also suggested replacing the `while` loop with a cleaner `for` loop or `.some()`.
💡 **My Insight:** Without updating the index variable, the condition `i < arr.length` never changes. Using a standard `for` loop makes the iteration boundaries much clearer and safer.
✅ **Fix:** Renamed the function to `hasEvenNumber`, switched to a `for` loop so the index increments automatically, and added plain English comments.