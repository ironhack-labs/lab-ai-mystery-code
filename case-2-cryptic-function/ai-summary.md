# Case 2: The Cryptic Function - Investigation Report

## 🔍 The Problem
The function name and variable names were confusing - impossible to tell what it does.

## 🧠 AI Prompt Used
> "What does this cryptic JavaScript function do? Explain it step-by-step."

## 🤖 What AI Told Me
The function checks if a string is a palindrome (reads the same forwards and backwards):
1. `.split('')` - breaks string into individual letters
2. `.reverse()` - flips the order backward
3. `.join('')` - puts letters back together as a string
4. `==` - compares if original and reversed are the same

## ✅ Solution
Renamed `q` to `isPalindrome` and added comments explaining each step.

## 📚 What I Learned
- Function and variable names should explain PURPOSE, not obscure it
- Breaking code into steps with comments makes it understandable
- "Cryptic" code is usually just simple logic with bad naming
