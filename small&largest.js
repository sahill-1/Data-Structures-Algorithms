let arr = [9,2,3,4,8,1,5,6,7,0];
let max = arr[0];
let min = arr[0];

for (let i=0; i<arr.length; i++){
    if(arr[i]<=min){
        min = arr[i];
    }
    else if(arr[i]>=max){
        max = arr[i]
    }
}
console.log("Smallest number is " + min);
console.log("Largest number is " + max);