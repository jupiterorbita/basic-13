// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

var myArr = [1, 5, 10, -2];

function minMaxAvg(arr) {
  var min = arr[0];
  var max = arr[0]
  var sum = 0;
  var avg = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = sum / arr.length;

  var newArr = [min, max, avg];
  return newArr;
}

console.log(minMaxAvg(myArr));