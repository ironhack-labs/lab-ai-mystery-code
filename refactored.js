## Case 1: The Infinite Loop

```js
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++;  
  }
  return false;
}



##  Case 2: The Cryptic Function

```js

function isPalindrome (text)
  {return text.split('').reverse().join('')===text;
  }



  ## Case 3: The Over-Engineered Mess

```js
function add(a, b) {
  return a + b;
}