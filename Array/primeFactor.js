// Prime Number from 0 to input;
let end = 10;
for (let i=1; i<=end; i++){
    let factor = 0;
    let num = i;
    for (let j=0; j<=num; j++){
        if(num%j===0){
            factor++;
        }
    }
    if(factor===2){
        console.log(num + " is a prime number.")
    }
    else{
        console.log(num + " is not a prime number.")
    }

}