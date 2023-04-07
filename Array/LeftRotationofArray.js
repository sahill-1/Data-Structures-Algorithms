// Print left rotation of array in O(n) time and O(1) space
// Given an array of size n and multiple values around which we need to left rotate the array.
// How to quickly print multiple left rotations?

// function leftRotate(arr, d, n){
//     for(let i=0; i<d; i++){
//         leftRotateByOne(arr, n);
//     }
// }
// function leftRotateByOne(arr, n){
//     let i;
//     let temp = arr[0];
//     for( i=0 ; i < n-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr[n-1] = temp;
// }
// function printArray(arr, n){
//     for (let i=0; i<n; i++){
//         console.log(arr[i])
//     }
// }

function leftRotate(arr, n, k){
    let mod = k % n;

    for (let i=0; i<n ; i++){
        console.log(arr[(mod + i) % n] + " ")
    }
}

let arr = [1,2,3,4,5];
let n = arr.length;
let k = 2;
leftRotate(arr,n ,k)
