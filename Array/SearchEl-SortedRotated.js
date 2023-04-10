// Search an element in a sorted and rotated Array
// Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.
// Note: Find the element in O(logN) time and assume that all the elements are distinct.

function SearchElement(arr, n, key){
    let left = 0;
    let right = n-1;
    let mid;

    while(left<=right){
        mid = Math.floor((left+right)/2);

        if(arr[mid]===key){
            return mid;
        }
        else if(arr[mid]>=arr[left]){
            if(key<=arr[mid] && key>=arr[left]) right = mid-1;
            else left = mid+1;
        }
        else{
            if(key>=arr[mid] && key<=arr[right]) left = mid+1;
            else right = mid-1
        }
    }
    return -1
}
let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr.length;
let key = 3;
element = SearchElement(arr, n, key);
console.log(element)