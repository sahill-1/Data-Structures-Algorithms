let str = "abcdefghijklmnopqrstuvwxyz";
let obj = {};
for (let i=0; i<str.length; i++){
    let char = str[i];
    obj[char] = i+1;
}
for (let key in obj){
    console.log(key + "-" + obj[key]);
}