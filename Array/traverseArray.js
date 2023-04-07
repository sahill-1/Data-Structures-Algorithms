function traverseArray(arr){
    
    for (let i=0; i<arr.length; i++){
        let bag = "";
        bag += arr[i];
        console.log(i + "-" + bag)
    }

}
let arr = [3,7,12,24,17,32];
traverseArray(arr)