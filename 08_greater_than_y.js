// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

var y = 3;
var myArr = [1, 3, 5, 7];

function greaterThanY(arr, y) {
  var sum = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      sum++;
    }
  }
  return sum;
}

console.log(greaterThanY(myArr, y));