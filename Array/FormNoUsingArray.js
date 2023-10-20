// Form a number divisible by 3 using array digits
// You will be given an array arr of integers of length N. You can construct an integer from two integers by treating the integers as strings, and then concatenating them. For example, 19 and 4 can be used to construct 194 and 419.
// The task is to find whether it’s possible to construct an integer using all the digits of these numbers such that it would be divisible by 3.
// If it is possible then print 1 and if not print 0.

// function formNumber(arr){
//     let x = arr.join("");
//     if(x%3===0) return 1
//     else return 0;
// }

// let arr = [40,50,90];
// console.log(formNumber(arr));

function x(arr) {
    let rem = 0;
    for (let i=0; i<arr.length; i++){
        rem = (rem+arr[i])%3;
    }
    return (rem===0) ? 1 : 0
}
let arr = [1,5];
console.log(x(arr))