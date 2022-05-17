let array = [];
let cont = 0;
var subContainer = document.getElementById('sub-container');
let arrayValues = [];


function createArray(number){

    document.getElementById("alert").innerText = "";
    if(cont > 0){
        let lastCont = cont;
        for(let i = 0; i < lastCont; i++){
            subContainer.removeChild(document.getElementById(`input${cont}`));
            cont--;
        }
    }
    
    array = [];
    for(let i = 0; i < number; i++){
        cont++;
        //crear elemento input
        var input = document.createElement('input');
        //var salto = document.createElement('br');
        // var btn_eliminar = document.createElement('button');
        // btn_eliminar.innerText= "Eliminar";
        // btn_eliminar.type = 'button';
        // btn_eliminar.id = "btn"+contador;
        input.type = 'number';
        input.id = "input"+cont;
        input.name = 'btn'+cont;
        input.placeholder = `Number ${cont}`
        //input.value = user.value;
        //input.setAttribute('disabled',''); // propiedad disabled
        //contenedor.append(salto);//todo lo agrego al div de almacenar
        subContainer.append(input);
        //contenedor.append(btn_eliminar);
    }
}

function calcOperation(op){

    arrayValues = [];

    for(let i=0; i<cont; i++){
        let value = document.getElementById(`input${i+1}`).value;
        if(value == null || value == undefined || value == 0){
            document.getElementById("alert").innerText = `El input ${i+1} está vacío`;
            break;
        }else{
            arrayValues.push(Number(value));
        }
    }

    if(document.getElementById("alert").innerText == ""){
        let result;
        console.log("arrayValues: ", arrayValues)
    
        switch (op) {
            case 'prom':
                result = calcMediaArit(arrayValues);
                console.log("result Prom: ", result);
                document.getElementById("result").innerText = `Resultado: El promedio es de ${result}`
                break;
            case 'med':
                result = calcMediana(arrayValues);
                console.log("result Mediana: ", result);
                document.getElementById("result").innerText = `Resultado: La mediana es de ${result}`
                break;
            case 'mod':
                result = calcModa(arrayValues);
                console.log("result Moda: ", result);
                document.getElementById("result").innerText = `Resultado: La moda es ${JSON.stringify(result)}`
                break;
            case 'medG':
                result = calcMediaGeometrica(arrayValues);
                console.log("result MediaGeom: ", result);
                document.getElementById("result").innerText = `Resultado: La media geometrica es ${result}`
                break;
            default:
                break;
        }

    }
}

// ============== OPERATIONS ==============

// ======= PROMEDIO ========
function calcMediaArit(list){
    const sumList = list.reduce( (sumTotal = 0, element) => {
        return sumTotal + element;
    })
    console.log("sumList: ", sumList)
    promList = sumList / list.length;
    console.log("promList: ", promList)
    return promList;
}

// ======= MEDIANA ========
function calcMediana(list){
    const orderList = list.sort( (a,b) => {
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

// ======= MODA ========
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

// ======= MEDIA GEOMETRICA ========
function calcMediaGeometrica(list = []){
    var total = 0;
    list.forEach( (element) => {
        if(total == 0){
            total = Number(element);
        }else{
            total*=Number(element);
        }
    })
    const mediaGeo = Math.pow(total, 1/list.length)
    return mediaGeo.toFixed(2);
}