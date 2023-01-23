// Number of Vowels and Consonants

function vowels(str){
    // let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||str[i] === "u"){
            count++;
        }
    }
    console.log("The number of vowels in string is" + " " + count + " & number of consonant is ");
}

let str = "my name is";
vowels(str);