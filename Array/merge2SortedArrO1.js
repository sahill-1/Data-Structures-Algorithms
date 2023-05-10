let a1 = [1, 5, 9, 10, 15, 20];
let a2 = [2, 3, 8, 13];

function merge(m, n) {
    for (let i = n - 1; i >= 0; i--) {
        let j; last = a1[m-1];
        for(j=m-2; j>=0 && a1[j]>a2[i]; j--){
            a1[j+1]=a1[j];
        }
        if(last>a2[i]){
            a1[j+1] = a2[i];
            a2[i] = last;
        }
    }
    console.log(a1)
    console.log(a2)
}
let m = a1.length;
let n = a2.length;
merge(m,n);