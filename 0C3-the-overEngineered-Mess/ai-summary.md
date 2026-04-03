 ### Case 3: The Over-Engineered Mess

:The_problem: The function is a bit more complex than it should be.
:brain: Prompt used: "It seems a basic math operation, adding two numbers. Why does it look like so complicated?"
:robot: AI suggested: Said that if the function is supposed to just add two numbers and it returns x.
:bulb: My Insight: y is unnecessary. It gets calculated inside the loop but not used nor returned.

:white_check_mark: Fix: Write the function simpler.

/*function addTwoNumbers(firstNum, 
secondNum) {

  return firstNum + secondNum;
}*/