//Reorder an array according to given indexes
// Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]” according to given index array. It is not allowed to given array arr’s length.

function Reorder(arr, index, n){
    for (let i=0; i<n; i++){
        while(index[i] !== i){
            let OldTargetI = index[index[i]];
            let OldTargetE = arr[index[i]];

            arr[index[i]] = arr[i];
            index[index[i]] = index[i];

            index[i] = OldTargetI;
            arr[i] = OldTargetE;

            
        }
        
    }
    console.log(arr);
    console.log(index);
}
var arr = [50, 40, 70, 60, 90];
var index = [3, 0, 4, 1, 2];
var n = arr.length;

Reorder(arr, index, n);