let num = [5,2,3,8,2,3];
let obj ={};
for (let i of num){
    
    if(obj[i] === undefined){
        obj[i]=1;
    }
    else{
        obj[i]++;
    }
    
}
for(let key in obj){
    if(obj[key]===1){
        console.log(key)
    }
}