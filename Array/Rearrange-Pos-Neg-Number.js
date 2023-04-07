// Rearrange positive and negative numbers in O(n) time and O(1) extra space
// An array contains both positive and negative numbers in random order. Rearrange the array elements so that positive and negative numbers are placed alternatively. A number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.
// For example, if the input array is [-1, 2, -3, 4, 5, 6, -7, 8, 9], then the output should be [9, -7, 8, -3, 5, -1, 2, 4, 6]

function RearrangeNumber(arr, n){
    let i = -1;
    let temp = 0;
    for(let j=0; j<n ; j++){
        if(arr[j]<0){
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let pos=i+1;
    let neg = 0;
    while(pos<n && neg<pos && arr[neg]<0){
        temp = arr[neg];
        arr[neg] = arr[pos];
        arr[pos] = temp;
        pos++;
        neg+=2; 
    }
    console.log(arr)
}

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
let n = arr.length;
RearrangeNumber(arr, n)