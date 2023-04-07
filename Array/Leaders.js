// Leaders in an array
// Write a program to print all the LEADERS in the array. 
// An element is a leader if it is greater than all the elements to its right side.
// And the rightmost element is always a leader. 

function Leader(arr, n) {
    for (let i = 0; i < n; i++) {
        let j;
        for ( j = i + 1; j < n; j++) {
            if (arr[i] <= arr[j]) {
                break;
            }
        }
        if (j === n) {
            console.log(arr[i])
        }
    }
}
let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
Leader(arr, n)
