function AbundantNumber(n){
    let bag = [];
    for (let i=0; i<n; i++){
        if(n%i===0){
            bag.push(i);
        }
    }
    let sum = 0; 
    for (let i=0; i<bag.length; i++){
        sum += bag[i];

        
    }
    if(sum > n){
        return true;
    }
    else{
        return false;
    }
    
}

let  n = 18;
let x = AbundantNumber(n);
console.log(x)