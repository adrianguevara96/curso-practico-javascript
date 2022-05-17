

function calcMediaGeometrica(list = []){
    console.log("list: ", list)

    var total = 0;
    list.forEach( (element) => {
        if(total == 0){
            total = Number(element);
        }else{
            total*=Number(element);
        }
    })
    console.log("total: ", total, list.length);
    const mediaGeo = Math.pow(total, 1/list.length)
    console.log(mediaGeo);
    return mediaGeo;
}

calcMediaGeometrica([3,5,12]);