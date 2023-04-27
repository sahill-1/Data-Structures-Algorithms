function smallestSubWithSum(arr, n, x){
    let curr_sum = 0;
    let min_len = n+1;
    let start = 0; 
    let end = 0;
    while( end < n ){
        while( curr_sum <= x && end < n ){
            curr_sum += arr[end++];
        }
        while(curr_sum > x && start<n){
            if(end-start<min_len){
                min_len = end-start;
            }
            curr_sum -= arr[start++];
        }
    }
    return min_len;
}

let arr = [1,4,45,6,10,19];
let n = arr.length;
let x= 51;
let res = smallestSubWithSum(arr,n,x);
(res == n + 1) ? console.log("Not possible")
    : console.log(res);