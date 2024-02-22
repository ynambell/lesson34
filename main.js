function lisItems(arr, numb) {
    for (let y = 1; y <= numb; y++) {
        for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' ' + y);
        }
    }
}

lisItems(['этаж', 'вагон'], 3)