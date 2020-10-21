// Write a function that returns an array with all the numbers from 1 to 255.

function getTo255() {
  arr = [];
  for (var idx = 1; idx <= 255; idx++) {
    arr.push(idx);
    console.log(idx);
  }
  return arr
}

getTo255();
console.log(getTo255());