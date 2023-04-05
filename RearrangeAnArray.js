// Rearrange an array such that arr[i] = i
// Given an array of elements of length N, ranging from 0 to N – 1. 
// All elements may not be present in the array. 
// If the element is not present then there will be -1 present in the array. 
// Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.

function RearrangeArray(arr,n){
    let i, j, temp;
    for( i=0; i<n; i++){
        for ( j=0; j<n; j++){
            if(arr[j]===i){
                temp = arr[j];
                arr[j]=arr[i]
                arr[i]=temp;
                break;
            }
        }
    }
    for( let i=0; i<n; i++){
        if(arr[i]!=i){
            arr[i] = -1;
        }
           
    }
    console.log(arr)
    
}

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
let n = arr.length;
RearrangeArray(arr,n)