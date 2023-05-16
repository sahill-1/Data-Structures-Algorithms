function isPairSum(A, N, X){
    for (let i=0; i<N-1; i++){
        for (let j=i+1; j<N; j++){
            
            if( i===j) continue;

            if(A[i]+A[j]===X) console.log(A[i] + " & " + A[j] + " are the two numbers.");

            if(A[i] + A[j] > X) break;

        }
    }
    return 0;
}

let A = [2, 3, 5, 8, 9, 10, 11];
let X = 17;
let N = A.length;

isPairSum(A,N,X);
