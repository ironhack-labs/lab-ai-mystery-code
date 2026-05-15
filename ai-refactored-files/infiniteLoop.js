function mystery1(arr) {
    let i = 0;
    let boolArr = [];
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            boolArr.push(true);
        } else {
            boolArr.push(false);
        }
        i++;
    }
    return boolArr;
}