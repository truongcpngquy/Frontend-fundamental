function findMax(numbers) {
    let maxNumber = numbers[0];
    let maxIndex = 0;
    
    numbers.forEach((num, index) => {
        if (num > maxNumber) {
            maxNumber = num;
            maxIndex = index;
        }
    });
    
    return { maxNumber, maxIndex };
}

let numbers = [10, 9, 5, 11, 24, 5];
let result = findMax(numbers);
console.log(`Phần tử lớn nhất là: ${result.maxNumber} \n Vị trí: ${result.maxIndex}`);
