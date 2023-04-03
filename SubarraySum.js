// Find Subarray with given sum | Set 1 (Non-negative Numbers)
// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.
// Note: There may be more than one subarray with sum as the given sum, print first such subarray


function SubarraySum(arr, n, sum){
    for (let i=0; i<n; i++){
        let currentSum = arr[i];

        if(currentSum === sum){
            console.log("Sum Found" + i)
            return;
        }
        else{
            for (let j=i+1; j<n; j++){
                currentSum += arr[j];

                if(currentSum === sum){
                    console.log("Sum found between " + i + " and " + j)
                    return;
                }
            }
        }
    }
    console.log("No subarray found");
    return;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23
SubarraySum(arr, n, sum);
