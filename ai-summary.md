### Case 1: Infinite Loop

:brain: Prompt used: “Context: A JS function is given that should be analyzed.
Tasks: Analyze the code. Describe the purpose of the code. In case it is broken suggest how it can be fixed. Suggest how it can be made more readable. Provide simple steps with short explanations for each step. Don't write entire paragraphs. Focus on the important things.
Code:
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}”
:robot: AI suggested: Add i++; at the end of the while loop.
:bulb: My Insight: i is never incremented.

:white_check_mark: Fix: Add i++; at the end of the while loop. Improve readability.


### Case 2: The Cryptic Function

:brain: Prompt used: “Context: A JS function is given that should be analyzed.

Tasks: Analyze the code. Describe the purpose of the code. In case it is broken suggest how it can be fixed. Suggest how it can be made more readable. Provide simple steps with short explanations for each step. Don't write entire paragraphs. Focus on the important things.

Code:

function q(q){return q.split('').reverse().join('')==q}”
:robot: AI suggested: Use a descriptive names. Reformat code.
:bulb: My Insight: Checks for a palindrome

:white_check_mark: Fix: Change function name and variable names to be more descriptive. Reformat the code to be more readable.


### Case 3: The Over-Engineered Mess

:brain: Prompt used: “Context: A JS function is given that should be analyzed.
Tasks: Analyze the code. Describe the purpose of the code. In case it is broken suggest how it can be fixed. Suggest how it can be made more readable. Provide simple steps with short explanations for each step. Don't write entire paragraphs. Focus on the important things.
Code:
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}”
:robot: AI suggested: Use descriptive names. Remove unnecessary variables. Remove unnecessary loop. Keep only required logic. 
:bulb: My Insight: The goal of the function is to calculate a + b.

:white_check_mark: Fix: Changed to descriptive names and removed unnecessary logic from the function.