// Sort an array in wave form
// Given an unsorted array of integers, sort the array into a wave array. 
// An array arr[0..n-1] is sorted in wave form if:
// arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=....


function Swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sortWave(arr, n){
    for (let i=0; i<n; i+=2){
        if( i>0 && arr[i-1]>arr[i]){
            Swap(arr, i-1, i);
        }

        if( i<n-1 && arr[i]<arr[i+1]){
            Swap(arr, i, i+1);
        }

        
    }
    console.log(arr);
}

let arr = [10, 90, 49, 2, 1, 5, 23];
let n = arr.length;
sortWave(arr, n);