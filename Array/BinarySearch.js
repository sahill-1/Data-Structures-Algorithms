//Divide and Conquer Technique
//Find the index of given no in an sorted array
// [1,2,3,4,5,6,7,8,9,10,11]

function BinarySearch(arr, number){
    let min = 0;
    let max = arr.length-1;
    while(min<=max){
        let midIndex = Math.floor((min+max)/2);

        if(arr[midIndex] <number){
            min = midIndex+1;
        }
        else if(arr[midIndex] > number){
            max = midIndex-1;
        }
        else{
            return midIndex;
        }
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let  number = 7;
let result = BinarySearch(arr, number);
console.log(result)