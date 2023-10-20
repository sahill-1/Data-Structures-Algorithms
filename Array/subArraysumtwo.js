function x(arr, targetSum){
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while(right<arr.length){
        currentSum+=arr[right];
        
        while(currentSum>targetSum){
            currentSum -= arr[left];
            left++;
        }

        if(currentSum===targetSum){
            return [left, right]
        }
        right++
    }
    return [-1]
}
const arr = [1, 20, 3, 10, 5];
const targetSum = 33;
console.log(x(arr,targetSum))