//BALANCED PARE

function balancedParanthesis(expr){
    let stack = [];
    for (let i=0; i<expr.length; i++){    
        let x = expr[i];
        if( x==="(" || x==="{" || x==="["){
            stack.push(x);
            continue;
        }

        if(stack.length===0){
            return false;
        }
        let check;
        switch (x){
            case ")" : check = stack.pop();
            if(check == "{" || check== "[") return false;
            break;
            case "}" : check = stack.pop();
            if(check == "(" || check== "[") return false;
            break;
            case "}" : check = stack.pop();
            if(check == "{" || check== "(") return false;
            break;
        }
    }
    return (stack.length===0);
}

let expr = "(){"; 

if(balancedParanthesis(expr)){
    console.log("Balanced Parenthesis")
}
else{
    console.log("Unbalanced Parenthesis")
}