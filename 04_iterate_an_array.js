// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function sumArr(arr) {
  var sum = 0;
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var myArr = [1, 2, 5];
var myArr2 = [-5, 2, 5, 12];
console.log(sumArr(myArr));
console.log(sumArr(myArr2));