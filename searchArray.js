let array = [1,2,3,4,5,6,7,8,9];
let index;
let el = 7;

for (let i=0; i<array.length; i++){
    if(array[i]===el){
        index = i;
        break;
    }
}
console.log(index);