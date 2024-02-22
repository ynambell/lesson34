function lisItems(arr, numb) {
    for (let y = 1; y <= numb; y++) {
        for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' ' + y);
        }
    }
}

lisItems(['этаж', 'вагон'], 3)

function mergeObjects(...obj) {
    let res = Object.assign({}, ...obj);
    console.log(res);
}

mergeObjects(
    {a: 41, b:3},
    {b: 8},
    {a: 6},
);