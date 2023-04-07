
function secondLargest(arr){
    if(arr.length<2){
        console.log("Invalid Input")
    }
    arr.sort((a,b) => a-b)
    // console.log(arr)
    for (let i=arr.length-2; i>=0; i--){
        if(arr[i] !== arr[arr.length-1]){
            console.log("Second largest element is " + arr[i]);
            return;
        }
    }
}
let arr = [1,8,3,2,5,4,7,10];
secondLargest(arr);