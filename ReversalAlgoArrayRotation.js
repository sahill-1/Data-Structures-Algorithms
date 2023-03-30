// Reversal algorithm for Array rotation
// Given an array arr[] of size N, the task is to rotate the array by d position to the left

function reverseArray(arr, start, end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

function reversalAlgo(arr, n, d){
    if (d===0) return;

    d = d % n;  //incase rotating factor is greater than array length
    
    reverseArray(arr, 0, d-1);
    reverseArray(arr, d, n-1);
    reverseArray(arr, 0, n-1);

    console.log(arr);
}

let arr = [1,2,3,4,5,6,7];
let n = arr.length;
let d = 2;

reversalAlgo(arr, n ,d)