let data = [1,2,3,4,5];
let el = 2;
let index = 5;
function insertElem(data,el,index){
    for (let i=data.length-1; i>=0; i--){
        if (i>=index) {
            data[i+1]=data[i];
            if(i===index){
                data[i] = el;
            }
        }
    }
    console.log(data)
}
insertElem(data,el,index)












