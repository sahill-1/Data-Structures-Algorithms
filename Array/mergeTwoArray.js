let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [];
for (let i=0; i<array1.length; i++){
    array3[i] = array1[i];
}
for (let i=0; i<array2.length; i++){
    array3[array1.length+i] = array2[i];
}
console.log(array3);