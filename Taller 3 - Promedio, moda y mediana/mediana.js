function calcMediana(list){
    const orderList = list.sort( (a,b) => {
        // console.log("a: ", a);
        // console.log("b: ", b);
        // console.log("a-b: ", a-b);
        return a-b; //forma ascendente
        // return b-a //forma descendente
    });

    const mitadLista = parseInt(orderList.length / 2);
    let mediana = 0;

    if(esPar(orderList.length)){
        const element1 = orderList[mitadLista];
        const element2 = orderList[mitadLista-1];
        mediana = calcMediaArit([element1, element2]);
        
    }else{
        mediana = orderList[mitadLista];
    }

    return mediana;
}

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calcMediaArit(list){
    const sumList = list.reduce( (sumTotal = 0, element) => {
        return sumTotal + element;
    })

    promList = sumList / list.length;
    return promList;
}

function compareNumbers(a, b) {
    return a - b;
  }

