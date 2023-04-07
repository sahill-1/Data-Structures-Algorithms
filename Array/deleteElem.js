function deleteElem(){
    let data = [1,2,3,4,5];
    let index = 2;
    for (let i=index; i<data.length-1; i++){
        data[i] = data[i+1];
    }
    data.length = data.length-1
    console.log(data)
}
deleteElem();
