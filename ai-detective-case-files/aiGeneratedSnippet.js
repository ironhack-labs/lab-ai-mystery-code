function mystery(numbers) {
    let result = [];

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i] * 2);
        } else {
            result.push(numbers[i].toUpperCase());
        }
    }

    return result;
}

const data = [2, 5, 8, 11];

console.log(mystery(data));