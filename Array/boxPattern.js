for (let i=1; i<=10; i++){
    let box = "";
    for (let j=0; j<=10; j++){
        if((j===1) || (j===10)){
            box+="*";
        }
        else{
            if((i===1) || (i===10)){
                box+="*";
            }
        }
    }
    console.log(box);
}