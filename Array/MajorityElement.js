function FindMajority(arr,n ){
    let maxCount = 0;
    let index = -1;
    for (let i=0 ; i<n; i++){
        let count = 0;
        for(let j=0; j<n; j++){
            if(arr[i]===arr[j]) count++;
        }
        //update maxcount if count of current element is greater
        if(count>maxCount){
            maxCount = count;
            index = 1;
        }
    }
    if(maxCount>n/2) console.log(arr[index]);
    else console.log("No majority element")
}
let arr = [1, 3, 3, 3, 2];
let n = arr.length;

FindMajority(arr,n);