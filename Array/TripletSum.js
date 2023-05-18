function TripletSum(arr, n, sum){
    
    for (let i=0; i<n-2; i++){
        for (let j=i+1; j<n-1; j++){
            for (let k=j+1; k<n; k++){
                if(arr[i]+arr[j]+arr[k]==sum){
                    console.log(arr[i]+" , "+arr[j]+" , "+arr[k])
                    return true
                }
            }
        }
    }
    return false
}
let arr = [1, 4, 45, 6, 10, 8];
let n = arr.length;
let sum = 22;
console.log(TripletSum(arr,n,sum))