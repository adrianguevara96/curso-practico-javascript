//document.getElementById('optionsDiv').style.display = 'none';
document.getElementById('backDiv').style.display = 'none';
document.getElementById('container2BodyDiv').style.display = 'none';
document.getElementById('sub-containerDiv').style.display = 'none';
document.getElementById('alertDiv').style.display = 'none';
document.getElementById('buttonsDiv').style.display = 'none';

function displayNone(value){
    if(value){
        document.getElementById('container2BodyDiv').style.display = 'none';
        document.getElementById('sub-containerDiv').style.display = 'none';
        document.getElementById('alertDiv').style.display = 'none';
        document.getElementById('buttonsDiv').style.display = 'none';
        document.getElementById('backDiv').style.display = 'none';
    }else{
        document.getElementById('container2BodyDiv').style.display = 'flex';
        document.getElementById('sub-containerDiv').style.display = 'initial';
        document.getElementById('alertDiv').style.display = 'initial';
        document.getElementById('buttonsDiv').style.display = 'initial';
        document.getElementById('backDiv').style.display = 'initial';
    }
}

function backHome(){
    displayNone(true);
    document.getElementById('optionsDiv').style.display = 'initial';
    createArray(0);
    document.getElementById("legend").textContent = "Operación";
    document.getElementById("result").innerHTML = "";
    document.getElementById("list").value = ""

}

function selectOption(value){
    switch (value) {
        case 'capAhorro':
            document.getElementById('optionsDiv').style.display = 'none';
            document.getElementById("ahorroSC").style.display = "none";
            document.getElementById("capAhorro").style.display = "initial";
            displayNone(false);
            document.getElementById('container2BodyLabel').innerText = 'Cantidad de Meses'
            break;
        case 'intSC':
            document.getElementById('optionsDiv').style.display = 'none';
            document.getElementById("capAhorro").style.display = "none";
            document.getElementById("ahorroSC").style.display = "initial";
            displayNone(false);
            
            break;
    
        default:
            break;
    }
}



// La capacidad de ahorro es la posibilidad que tienen las personas de separar un
// porcentaje de sus ingresos y reservarlo para su uso en el futuro; siempre y cuando
// hacerlo no signifique desmejorar la calidad de vida o vivir “con las justas”.

// ========= Capacidad de Ahorro (Anual) ========= 

function calcCapacidadAhorro(){
    const months = document.getElementById("list").value;
    let ahorroT = 0;

    for(let i= 0; i < months; i++){
        income = document.getElementById(`inputIncome${i+1}`).value;
        //expense = document.getElementById(`inputExpense${i+1}`).value;
        ahorroT += Number(income);
    }

    // const ingresosI = ingresosMensuales.reduce( (sumTotal = 0, element) => {
    //     return sumTotal + element;
    // });

    const fiftyPercent = ahorroT * 0.5;
    const thirtyPercent = ahorroT * 0.3;
    const twentyPercent = ahorroT * 0.2;

    document.getElementById("legend").textContent = "Resultado"
    document.getElementById("result").innerHTML = 
        `<span>Gastos fijos y necesidades básicas, ${fiftyPercent}.</span><br>
         <span>Gastos personales, ${thirtyPercent}.</span><br>
         <span>Ahorro, ${twentyPercent}.</span>`
}

let arrayIng = [];
let arrayGas = [];
let contIngGas = 0;
var subContainer = document.getElementById('sub-containerDiv');
let arrayValues = [];


function createArray(number){

    document.getElementById("alert").innerText = "";
    if(contIngGas > 0 ){
        let lastContIngGas = contIngGas;

        for(let i = 0; i < lastContIngGas; i++){
            subContainer.removeChild(document.getElementById(`inputIncome${contIngGas}`));
            //subContainer.removeChild(document.getElementById(`inputExpense${contIngGas}`));
            subContainer.removeChild(document.getElementById(`label${contIngGas}`));
            contIngGas--;
        }
    }
    
    arrayIng = [];
    arrayGas = [];
    for(let i = 0; i < number; i++){
        contIngGas++;

        //crear label
        var label = document.createElement('label');
        label.id = "label"+contIngGas;
        label.innerText = `Month ${contIngGas}`;
        label.style.width = '40%';
        label.style.display = 'inline-block';
        subContainer.append(label);

        //crear elemento input ingresos
        var inputIng = document.createElement('input');
        inputIng.type = 'number';
        inputIng.id = "inputIncome"+contIngGas;
        inputIng.name = 'btnIncome'+contIngGas;
        inputIng.placeholder = `Income ${contIngGas}`;
        inputIng.style.width = '40%';
        subContainer.append(inputIng);

        //crear elemento input gastos
        // var inputGas = document.createElement('input');
        // inputGas.type = 'number';
        // inputGas.id = "inputExpense"+contIngGas;
        // inputGas.name = 'btnExpense'+contIngGas;
        // inputGas.placeholder = `Expense ${contIngGas}`;
        // inputGas.style.width = '30%';
        // subContainer.append(inputGas);
    }
}

