// Maximum in array

function max_in_arr(arr){
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)
}
let arr = [1,2,3,8,5,6];
max_in_arr(arr);