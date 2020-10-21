// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var myArr = [1, 3, 5, 7, 20];

function findAvg(arr) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}

console.log(findAvg(myArr));