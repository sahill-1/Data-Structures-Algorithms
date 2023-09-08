// Given an unsorted array "A" of size "n" that contains only positive integers, find a continuous subarray that adds to a given number "S" and return Left index and Right index of that subarray,
// In case of multiple subarray, return the subarray indexes which come first on moving left to right
// NOTE: you have to return an array list consisting of two elements left and right. Incase no subarray exists return an array consisting of element -1.

function findSubarrayWithSum(arr, S) {
  let left = 0; // Left pointer
  let right = 0; // Right pointer
  let currentSum = 0; // Current sum of elements in the subarray

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum > S) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === S) {
      // Found a subarray with the given sum
      return [left , right ]; // 1-based indexing
    }

    right++;
  }

  // If no subarray is found
  return [-1];
}

const arr = [1, 2, 4 ];
const S = 10;

const result = findSubarrayWithSum(arr, S);

if (result[0] === -1) {
  console.log("No subarray found with the given sum.");
} else {
  console.log(`Subarray with sum ${S} found at indexes: [${result[0]}, ${result[1]}]`);
}
