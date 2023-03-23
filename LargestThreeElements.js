// Find largest 3 numbers in an array

let array = [ 1,3,9,5,8,4,6,11];

let first, second, third;
first = second = third = -Infinity;

for (let i=0; i<=array.length; i++){
    if(array[i]>first){
        third=second;
        second=first;
        first=array[i];
    }
    else if(array[i]>second){
        third=second;
        second=array[i];
    }
    else if(array[i]>third){
        third=array[i];
    }
}
console.log("The first largest el is " + first)
console.log("The second largest el is " + second)
console.log("The third largest el is " + third)