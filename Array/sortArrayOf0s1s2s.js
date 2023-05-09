// Program to sort an array of 0s, 1s and 2s
function sort012(arr, n){
    let low = 0;
    let mid = 0;
    let high = n-1
    let temp=0;
    while (mid<=high){
        if(arr[mid]===0){
            temp = arr[low];
            arr[low]=arr[mid];
            arr[mid]= temp;
            low++;
            mid++;
        }
        else if(arr[mid]==1){
            mid++
        }
        else{
            temp = arr[mid]; 
                arr[mid] = arr[high]; 
                arr[high] = temp; 
                high--;
        }
    }
    console.log(arr)
}
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
let n = arr.length;
sort012(arr,n);
// Time Complexity: O(n), Only one traversal of the array is needed.
// Space Complexity: O(1), No extra space is required.