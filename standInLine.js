/**
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
 */
function nextInLine(arr, item) {
  // Add the number to the end of the array
  arr.push(item);
  // then remove the first element of the array
  var remove = arr.shift();
  // should return the element that was removed
  return remove;
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Test code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));
