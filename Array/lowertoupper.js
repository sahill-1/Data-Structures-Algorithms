let str = "boomerang";
let bag = "";
let lower = "qwertyuiopasdfghjklzxcvbnm";
let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
for (let i=0; i<str.length; i++){
    let char = str[i];
    for (let j=0; j<lower.length; j++){
        if(char === lower[j]){
            bag += upper[j];
        }
    }
}
console.log(bag);