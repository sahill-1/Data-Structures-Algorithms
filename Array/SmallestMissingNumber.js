let arr = [0,1,2,6,7];
let n = arr.length;
for (let i=0; i<=n; i++){
if(arr[0] != 0){
    console.log("Smallest missing number is " + 0)
}
else  if(arr[i+1]-arr[i] > 1){
    console.log("Smallest missing number is " + (arr[i]+1))
}
}