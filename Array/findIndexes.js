// Given an unsorted array "A" of size "n" that contains only positive integers, find a continuous subarray that adds to a given number "S" and return Left index and Right index of that subarray,
// In case of multiple subarray, return the subarray indexes which come first on moving left to right
// NOTE: you have to return an array list consisting of two elements left and right. Incase no subarray exists return an array consisting of element -1.

function index(arr, s, n) {
  for (let i = 0; i < n; i++) {
    let currentSum = arr[i];

    if (currentSum === s) {
      console.log("The index of s is" + i);
      return;
    } else {
      for (let j = i + 1; j < n; j++) {
        if(currentSum+arr[j] === s){
            console.log("The left and right index of s is" + i + "and" + j + "respectively." );
            return;
        }
      }
    }
    console.log("no such sum found")
  }
}
let arr = [2,4,3,7,1,9,8];
let s = 11;
let n = 7;
let x = index(arr, s, n);
console.log(x);
