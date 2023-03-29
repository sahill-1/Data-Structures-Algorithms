// Given an array arr[] of size N, the task is to rotate the array by d position to the left.

function reverseArray(arr, start, end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function leftRotate(arr, d, n){
    if(d===0) return;
    d = d % n;

    reverseArray(arr, 0, d-1);
    reverseArray(arr, d, n-1);
    reverseArray(arr, 0, n-1)
}
function printarray(arr,size){
    for (let i=0; i<size; i++){
        console.log(arr[i])
    }
}
let arr = [1,2,3,4,5,6];
let n = arr.length;
let d = 2;

leftRotate(arr,d,n)
printarray(arr,n)