//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) { 
    return lado*lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}    

function areaTriangulo(base, altura) {
    //return (`El area del triangulo es de: ${(base * altura) / 2} cm^2.`);
    return (base*altura)/2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return ((radio * radio) * PI);
}
console.groupEnd();





//======== Funciones para HTML =======
var option = 0;
var lastValue;

var value1 = "";
var value2 = "";
var op = "";

var alturaTrianguloIso = 0;

function limpiarVariables(){
    value1 = "";
    value2 = "";
    op = "";
}

function valueC(value){
    if(value == 'clear'){
        document.getElementById('screenCalculator').innerHTML = "";
        document.getElementById('screenCalculator2').innerHTML = "";
        limpiarVariables();
        return;
    }

    document.getElementById('screenCalculator').innerHTML = "";
    var screen = document.getElementById('screenCalculator2').innerHTML;

    if(screen == "" && value >= 0){
        value1 = value;
        document.getElementById('screenCalculator2').innerHTML = `${value}`;
    }else if(screen != ""){
        if(value >= 0 && op == ""){
            value1 += String(value);
            document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
        }else if(value >= 0 && op != ""){
            value2 += String(value);
            document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
        }else{
            if(value == '.' && op == ""){
                value1 += String(value);
                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
            }else if(value == '.' && op != ""){
                value2 += String(value);
                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
            }else if(value != '=' && value != '.'){
                if(op == ""){
                    console.log("Primer operador")
                    op = value.trim();
                }else{
                    if(value2 != ''){
                        console.log("Ya tengo un operador");
                        switch(op){
                            case '+':
                                value1 = Number(value1)+Number(value2);
                                value2 = "";
                                op = value;
                                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
                                break;
                            case '-':
                                value1 = Number(value1)-Number(value2);
                                value2 = "";
                                op = value;
                                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
                                break;
                            case '/':
                                value1 = Number(value1)/Number(value2);
                                value2 = "";
                                op = value;
                                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
                                break;
                            case '*':
                                value1 = Number(value1)*Number(value2);
                                value2 = "";
                                op = value;
                                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
                                break;
                        }
                    }else{
                        op = value;
                    }
                    
                }
                document.getElementById('screenCalculator2').innerHTML = `${value1+op+value2}`;
            }else if(value == '='){
                switch(op){
                    case '+':
                        document.getElementById('screenCalculator').innerHTML = `${Number(value1)+Number(value2)}`;
                        break;
                    case '-':
                        document.getElementById('screenCalculator').innerHTML = `${Number(value1)-Number(value2)}`;
                        break;
                    case '/':
                        document.getElementById('screenCalculator').innerHTML = `${Number(value1)/Number(value2)}`;
                        break;
                    case '*':                      
                        document.getElementById('screenCalculator').innerHTML = `${Number(value1)*Number(value2)}`;
                        break;
                }
                document.getElementById('screenCalculator2').innerHTML = "";
                limpiarVariables();
            }
        }
    }
}
//======== Cuadrado =========

function cuadrado(value){
    option = value;
    //document.getElementById('screenCalculator').innerHTML = `Seleccione la opción para calcular el perímetro o el área del cuadrado`;
    document.getElementById('screenCalculator').innerHTML = `¿Cuánto mide cada lado de tu cuadrado?: `;
    //document.getElementById('screenCalculator2').innerHTML = `____`;

    document.getElementById('perimetro').innerHTML = `Perímetro`;
    document.getElementById('perimetroButton').style.background = "rgb(239, 239, 239)";
    document.getElementById('perimetroButton').style.color = "black";
    document.getElementById('areaButton').style.background = "rgb(239, 239, 239)";
    document.getElementById('areaButton').style.color = "black";

    document.getElementById('area').innerHTML = `Área`;
    document.getElementById('trianguloButton').style.background = "lightgray";
    document.getElementById('circuloButton').style.background = "lightgray";
}

function perimetroOperation(){
    if(option == 'c'){
        const perimetro = perimetroCuadrado(Number(document.getElementById('screenCalculator2').innerHTML));
        document.getElementById('screenCalculator').innerHTML = `El perímetro del cuadrado es de ${perimetro} cm.`;
        document.getElementById('screenCalculator2').innerHTML = ``;
    }else if(option == 't'){

    }else if(option == 'ci'){

    }
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado').value;

    const perimetro = perimetroCuadrado(input);
    document.getElementById('labelResultadoCuadrado').innerHTML = `El perímetro es de ${perimetro} cm`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado').value;

    const area = areaCuadrado(input);
    document.getElementById('labelResultadoCuadrado').innerHTML = `El área es de: ${area} cm^2`;
}

//======== Triangulo ========
function calcularPerimetroTriangulo(){
    const lados = document.getElementById('inputLadosTriangulo').value;
    const base = document.getElementById('inputBaseTriangulo').value;

    const perimetro = perimetroTriangulo(Number(lados),Number(lados),Number(base));
    document.getElementById('labelResultadoTriangulo').innerHTML = `El perímetro es de: ${perimetro.toFixed(2)} cm.`;
}

function calcularAreaTriangulo(){
    const base = document.getElementById('inputBaseTriangulo').value;
    const altura = document.getElementById('inputAlturaTriangulo').value;

    const area = areaTriangulo(base, altura);
    document.getElementById('labelResultadoTriangulo').innerHTML = `El área es de: ${area.toFixed(2)} cm.`;
}

function calcularPerimetroTrianguloIsosceles(){
    const lado1 = document.getElementById('inputLado1TrianguloIso').value;
    const lado2 = document.getElementById('inputLado2TrianguloIso').value;
    const base = document.getElementById('inputBaseTrianguloIso').value;

    if(trianguloIsosceles(lado1, lado2, base)){
        const perimetro = +lado1*2 + +base;
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `El perímetro es de: ${perimetro.toFixed(2)} cm.`;
    }else{
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `No es un triángulo isósceles.`;
    }
}

function calcularAlturaTrianguloIsosceles(){
    const lado1 = document.getElementById('inputLado1TrianguloIso').value;
    const lado2 = document.getElementById('inputLado2TrianguloIso').value;
    const base = document.getElementById('inputBaseTrianguloIso').value;

    if(trianguloIsosceles(lado1, lado2, base)){
        alturaTrianguloIso = Math.sqrt((lado1**2 - ((base**2)/4)));
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `La altura es de: ${altura.toFixed(2)} cm.`;

    }else{
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `No es un triángulo isósceles.`;
    }
}

function calcularAreaTrianguloIsosceles(){
    const lado1 = document.getElementById('inputLado1TrianguloIso').value;
    const lado2 = document.getElementById('inputLado2TrianguloIso').value;
    const base = document.getElementById('inputBaseTrianguloIso').value;

    if(alturaTrianguloIso == 0) {
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `Calcule primero la altura.`;
        return;
    }
    
    if(trianguloIsosceles(lado1, lado2, base)){
        const area = (base*alturaTrianguloIso)/2;
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `El area es de: ${area.toFixed(2)} cm.`;

    }else{
        document.getElementById('labelResultadoTrianguloIso').innerHTML = `No es un triángulo isósceles.`;
    }
}

function trianguloIsosceles(lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base && lado2 != base){
        return true;
    }else{
        return false;
    }
}

//======== Circulo =========

function calcularDiametroCirculo(){
    const radio = document.getElementById('inputRadioCirculo').value;

    const diametro = diametroCirculo(radio);
    document.getElementById('labelResultadoCirculo').innerHTML = `El diametro es de ${diametro} cm.`;
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById('inputRadioCirculo').value;

    const diametro = diametroCirculo(radio);
    const perimetro = diametro * PI;
    document.getElementById('labelResultadoCirculo').innerHTML = `El perimetro es de ${perimetro.toFixed(2)} cm.`;
}
function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadioCirculo').value;

    const area = (radio * radio) * PI;
    document.getElementById('labelResultadoCirculo').innerHTML = `El area es de ${area.toFixed(2)} cm^2.`;
}
