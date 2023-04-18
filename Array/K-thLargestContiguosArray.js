function KthLargest(arr, K, N){
    let result = [];
    // For subarray
    for (let i=0; i<N; i++){
        let sum = 0;
        for (let j=i; j<N; j++){
            sum += arr[j];
            result.push(sum);
        }
    }
    result.sort();
    result.reverse()
    return result[K-1];
}

let arr = [20, -5, -1];
let N = arr.length;
let K = 3;

let x = KthLargest(arr, K, N);
console.log(x);