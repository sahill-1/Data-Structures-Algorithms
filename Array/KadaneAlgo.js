// Largest Sum Contiguous Subarray (Kadane's Algorithm)
// The Kadane algorithm is a dynamic programming algorithm used for finding the maximum subarray sum in a given array of integers.

function maxsubArraySum(arr){
    let maxEndingHere = arr[0];
    let maxSofar = arr[0];

    for (let i=1; i<arr.length; i++){
        maxEndingHere = arr[i] > maxEndingHere+arr[i] ? arr[i] : maxEndingHere + arr[i];

        maxSofar = maxEndingHere > maxSofar ? maxEndingHere: maxSofar
    }

    return maxSofar;
}

let arr = [1, 2, 3, -2, 5];
let result = maxsubArraySum(arr);
console.log(result);