//Calculadora de medianas
function medianaSalary(list){
    const middle = parseInt(list.length / 2);

    if(esPar(list.length)){
        const element1 = list[middle];
        const element2 = list[middle-1];
        const mediana = calcMediaArit([element1, element2]);
        return mediana;
    }else{
        const mediana = list[middle];
        return mediana;
    }
}

//Mediana General
const salaryVenezuela = venezuela.map( (person)=> {
    return person.salary;
});

const salaryColombia = colombia.map( (person)=> {
    return person.salary;
});

const salaryVSorted = salaryVenezuela.sort( (a,b) => {
    return a-b;
});

const salaryCSorted = salaryColombia.sort( (a,b) => {
    return a-b;
});

function calcMediaArit(list){
    const sumList = list.reduce( (sumTotal = 0, element) => {
        return sumTotal + element;
    })

    promList = sumList / list.length;
    return promList;
}

const medianaGeneralVenezuela = medianaSalary(salaryVSorted);
const medianaGeneralColombia = medianaSalary(salaryCSorted);

//Utils - Helpers
function esPar(number){
    return (number % 2 === 0);
}

//Mediana del Top 10%

const spliceVStart = parseInt(salaryVSorted.length * 0.9);
const spliceVCount = salaryVSorted.length - spliceVStart;
const spliceCStart = parseInt(salaryCSorted.length * 0.9);
const spliceCCount = salaryCSorted.length - spliceCStart;

const salaryVTop10 = salaryVSorted.splice(spliceVStart, spliceVCount)
const salaryCTop10 = salaryCSorted.splice(spliceCStart, spliceCCount)

const medianaVTop10 = medianaSalary(salaryVTop10);;
const medianaCTop10 = medianaSalary(salaryCTop10);


console.log({
    medianaGeneralColombia,
    medianaCTop10,
    medianaGeneralVenezuela,
    medianaVTop10
})