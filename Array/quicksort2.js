function quicksort(arr){
    let n = arr.length;
    if (n === 1){
        return arr
    }
    let pivot = arr[n-1];
    let left = [];
    let right = [];
    for (let i=0; i<n-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    if(left.length > 0 && right.length > 0){
        return [...quicksort(left), pivot, ...quicksort(right)]
    }
    else if(left.length > 0){
        return [...quicksort(left), pivot]
    }
    else{
        return [pivot, ...quicksort(right)]
    }
}

let arr = [2,1,4,3,7,5]
console.log(quicksort(arr))