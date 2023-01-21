// Identify Prime
function primeNumber(num){
    let prime = true;
    if(num===1){
        console.log("Not a Prime Number")
    }
    else if(num>1){
        for (let i=2; i<num; i++){
            if(num%i===0){
                prime = false;
                break;
            }
        }
        if(prime){
            console.log("Prime Number")
        }
        else{
            console.log("Not a Prime Number")
        }
    }
}
let num = 7;
primeNumber(num);