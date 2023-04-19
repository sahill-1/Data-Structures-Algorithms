let data = [10,15,18,34,67];
let start = 0;
let end = data.length-1;
let find = 10;
let position = undefined;
function recursiveBinary(data, start, end){
    mid = Math.floor((start+end)/2);
    if(data[mid]===find){
        position = mid;
        return true;
    }
    else if(data[mid] < find){
        recursiveBinary(data, mid+1, end);
    }
    else{
        recursiveBinary(data, start, mid-1)
    }
}

recursiveBinary(data,start, end);
console.log(position);