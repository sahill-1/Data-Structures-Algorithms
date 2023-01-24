
function averageSum(array){
    let sum = 0;
    let average = 0;
    let n = array.length;
    for (let i=0; i<n; i++){
        sum += array[i];
        average = sum/n;
    }
    console.log(Math.floor(average));
}

let array = [1,2,3,4,5,6];
averageSum(array);