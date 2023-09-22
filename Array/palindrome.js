// Palindrome or Not

function Palindrome(str){
    let flag = true;
    let n = str.length;
    for (let i=0; i<n; i++){
        if(str[i] !== str[n-1-i]){
            flag = false;
        }
    }
    if(flag){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    }
}

let str = "abcba"
Palindrome(str);

{/*


*/}