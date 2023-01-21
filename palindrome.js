// Palindrome or Not

function Palindrome(str){
    let flag = true;
    let n = str.length;
    for (let i=0; i<n; i++){
        if(str[i]!==str[n-i-1]){
            flag = false;
        }
    }
    if(flag){
        console.log("Palindrome")
    }
    else{
        console.log("Not a Palindrome")
    }
}

let str = "abcddba"
Palindrome(str);