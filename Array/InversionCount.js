// BRUTE FORCE
// function InversionCount(arr, n){
//     let inv_count = 0;
//     for (let i=0; i<n-1; i++){
//         for (let j=i+1; j<n; j++){
//             if (arr[i]>arr[j]) inv_count++;
//         }
//     }
//     return inv_count;
// }
// let arr = [1, 20, 6, 4, 5];
// let n = arr.length;
// let x = InversionCount(arr,n);
// console.log(x)
// TC- O(n*n)


// USING MERGE SORT
function mergeAndCount(arr, l, m, r){
    // For left Subarray
    let left = [];
    for (let i=l; i<m+1; i++){
        left.push(arr[i])
    }

    // For Right Subarray
    let right = [];
    for (let i=m+1; i<r+1; i++){
        right.push(arr[i]);
    }

    let i=0, j=0, k=l, swaps=0;
    while( i<left.length  && j<right.length){
        if(left[i] <= right[j]){
            arr[k++] = left[i++];
        }
        else{
            arr[k++] = right[j++];
            swaps += (m+1) - (l+i);
        }
    }
    while(i<left.length){
        arr[k++]=left[i++];
    }
    while(j<right.length){
        arr[k++]=right[j++];
    }
    return swaps;
}

function mergeSortAndCount(arr,l, r){
    let count = 0; 
    if(l<r){
        let m = Math.floor((l+r)/2);

        // Left Subarray Count
        count += mergeSortAndCount(arr, l, m)

        // Right Subarrray count
        count += mergeSortAndCount(arr, m+1, r);

        // Merge Count
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}

let arr = new Array(1, 20, 6, 4, 5);
let n = arr.length-1;
console.log(mergeSortAndCount(arr, 0 , n, ))