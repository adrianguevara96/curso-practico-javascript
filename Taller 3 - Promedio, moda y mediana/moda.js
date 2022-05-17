function calcModa(list){
    const countList = {};

    list.map( (element)=>{
        //Si existe el elemento, suma 1;
        if(countList[element]){
            countList[element] += 1;
        }else{
            //Si no existe, crealo;
            countList[element] = 1;
        }
    });

    const countListToArray = Object.entries(countList).sort( (a, b) => {
        return a[1] - b[1];
    });

    const moda = countListToArray[countListToArray.length-1];
    let modaArray = [];

    countListToArray.forEach( (element) => {
        //Si el elemento actual es igual al valor de la moda y el valor de la moda es igual a 1, quiere decir que no hay moda
        if(element[1] == moda[1] && moda[1] == 1){
            modaArray[0] = 'No hay moda';
        }else if(element[1] == moda[1]){
            modaArray.push({
                moda:  Number(element[0]),
                repeticiones: element[1]
            })
        }
    });

    return modaArray;
}













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

