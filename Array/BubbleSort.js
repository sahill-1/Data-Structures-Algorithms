function bubbleSort(arr){
    for (let i=0; i<arr.length - 1; i++){
        let swapped = false;
        for (let j=0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break
        }
    }
}

let arr = [2,1,4,3,6,9];
bubbleSort(arr)
console.log(arr)