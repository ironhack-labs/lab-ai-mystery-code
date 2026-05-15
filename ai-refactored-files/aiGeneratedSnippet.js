function mystery(numbers) {
    // let result = [];

    const result = numbers.map((number) => {
        if (number % 2 === 0) {
            return number * 2
        }
        return number
    })

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 2 === 0) {
    //         result.push(numbers[i] * 2);
    //     } else {
    //         result.push(numbers[i]);
    //     }
    // }

    return result;
}