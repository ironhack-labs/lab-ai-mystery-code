# Case 3: The Over-Engineered Mess - Investigation Report

## 🔍 The Problem
The function uses a loop to do something that could be done in one line.

## 🧠 AI Prompt Used
> "What is this overcomplicated function really doing? Can it be simplified?"

## 🤖 What AI Told Me
The function is just adding `b` to `a`. The loop increments `x` by 1 and decrements `y` by 1, looping `b` times. This is equivalent to: `a + b`

## ✅ Solution
Replaced the entire 6-line function with a single line:
```javascript
return firstNum + secondNum;
```

## 📚 What I Learned
- Sometimes simple problems are hidden in complex code
- A loop isn't always necessary
- Simpler code is easier to understand and faster to run
- Ask: "What is this REALLY doing?" not "How does it work?"
