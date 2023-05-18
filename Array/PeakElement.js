function PeakElement(arr, n){
    //Corner Cases
    if (n===1) return 0;
    if (arr[0] >= arr[1]) return 0;
    if (arr[n-1] >= arr[n-2]) return arr[n-1];

    //Check for every other element
    for (let i=1; i<n-1; i++){
        if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1]){
            return arr[i]
        }
    }
}

let arr = [1, 3, 20, 4, 1, 0];
let n = arr.length;

console.log("Peak Element is " + PeakElement(arr,n));

