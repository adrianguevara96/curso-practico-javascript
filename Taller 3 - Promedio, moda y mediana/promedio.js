export default function calcMediaArit(list){
    const sumList = list.reduce( (sumTotal = 0, element) => {
        return sumTotal + element;
    })

    promList = sumList / list.length;
    return promList;
}
