// Rearrange an array in maximum minimum form using Two Pointer Technique
// Given a sorted array of positive integers, rearrange the array alternately i.e first 
// element should be a maximum value, at second position minimum value, at third position 
// second max, at fourth position second min, and so on.



function rerarrange(arr,n){
    let temp = new Array(n);
    let small = 0;
    let large = n-1;
    let flag = true;

    for (let i=0; i<n; i++){
        if(flag){
            temp[i] = arr[large--];
        }
        else{
            temp[i] = arr[small++];
        }

        flag = !flag;
    }
    for(let i=0; i<n; i++){
        arr[i] = temp[i];
    }
    console.log(arr+" ");
}

let arr = [1,2,3,4,5,6];
let n = arr.length;
rerarrange(arr,n);
