### Case 1: The Infinite Loop

#### 🧠 Prompt(s) Used:
- "What's wrong with this JS loop? Explain and fix it."

#### 🤖 AI Response Summary:
- The AI identified that the loop is missing an increment statement (`i++`)
- Without incrementing `i`, the loop never advances and runs infinitely
- The function is trying to check if any element in the array is even

#### 💡 My Understanding:
- The loop checks `arr[i] % 2 === 0` to find even numbers
- But `i` never increases, so it keeps checking the same element forever
- If the first element is odd, the loop never exits

#### ✅ The Fix:
- Added `i++` inside the while loop to increment the counter
- Now the loop properly iterates through all array elements
- Returns `true` if any even number is found, `false` otherwise

#### 🎯 What I Learned:
- Always ensure loop counters are incremented
- Infinite loops happen when exit conditions are never met
- AI can quickly spot logic errors, but I need to understand *why*
