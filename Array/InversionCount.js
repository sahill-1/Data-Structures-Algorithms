// BRUTE FORCE
function InversionCount(arr, n){
    let inv_count = 0;
    for (let i=0; i<n-1; i++){
        for (let j=i+1; j<n; j++){
            if (arr[i]>arr[j]) inv_count++;
        }
    }
    return inv_count;
}
let arr = [1, 20, 6, 4, 5];
let n = arr.length;
let x = InversionCount(arr,n);
console.log(x)