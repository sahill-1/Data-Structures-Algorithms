let n = 5;
let arr = [1,2,3,5];
let totalSum = (n*(n+1))/2;
let arrSum = 0;
for (let i=0; i<arr.length; i++){
    arrSum += arr[i]
}
let missing = totalSum-arrSum;
console.log("missing number is", missing)