// Move all zeros to the end!

function moveZero(arr, n){
    let count = 0;
    for( let i=0; i<n; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }

    while(count<n){
        arr[count++] = 0;
    }
}
let arr = [1,0,2,0,4,0,0,6];
moveZero(arr, arr.length)
console.log(arr)
