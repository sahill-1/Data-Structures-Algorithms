// Segregate even and odd numbers | Set 3
// Given an array arr[] of integers, segregate even and odd numbers in the array.
// Such that all the even numbers should be present first, and then the odd numbers.

function segregateEvenOdd(arr, n){
    let index = 0;
    let a = [];

    for (let i=0; i<n; i++){
        if(arr[i]%2===0){
            a[index++] = arr[i];
        }
    }
    for (let i=0; i<n; i++){
        if(arr[i]%2!==0){
            a[index++] = arr[i];
        }
    }
    console.log(a);
}

let arr = [1,2,3,4,5,6,8,9];
let n = arr.length;
segregateEvenOdd(arr,n)