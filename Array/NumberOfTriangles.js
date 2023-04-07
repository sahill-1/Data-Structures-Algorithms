// Count the number of possible triangles
// Given an unsorted array of positive integers, find the number of triangles that can be formed with
// three different array elements as three sides of triangles. 
// For a triangle to be possible from 3 values, the sum of any of the two values
// (or sides) must be greater than the third value (or third side).

function NumberOfTriangles(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (
                    arr[i] + arr[j] > arr[k] &&
                    arr[j] + arr[k] > arr[i] &&
                    arr[k] + arr[i] > arr[j]) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

let arr = [10, 21, 22, 100, 101, 200, 300];
let n = arr.length;

NumberOfTriangles(arr, n);