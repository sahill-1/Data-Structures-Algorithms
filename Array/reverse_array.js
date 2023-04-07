// Reverse Array

function reverseArray(arr){
    let bag = "";
    for (let i=arr.length-1; i>=0; i--){
        bag += arr[i] + " ";
    }
    console.log(bag);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
reverseArray(arr)




