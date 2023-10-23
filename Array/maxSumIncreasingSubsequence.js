function maxSumIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = [...arr]; 
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + arr[i]) {
                dp[i] = dp[j] + arr[i];
            }
        }
    }

    // Find the maximum value in dp array manually
    let max = dp[0];
    for (let i = 1; i < n; i++) {
        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return max;
}
const arr = [1, 101, 2, 3, 100];
const result = maxSumIncreasingSubsequence(arr);
console.log("Maximum", result);
