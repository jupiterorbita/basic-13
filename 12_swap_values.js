// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

var myArr = [1, 5, 10, -2];

function swapValues(arr) {
  console.log(arr);
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

console.log(swapValues(myArr));