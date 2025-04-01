function processArray(arr) {
    if (!Array.isArray(arr)) {
        return "Du lieu khong hop le";
    }

    if (arr.length === 0) {
        return "Mang khong co phan tu nao";
    }

    let squaredArray = arr.map(number => number ** 2);
    let evenNumbers = squaredArray.filter(number => number % 2 === 0);
    alert(`${evenNumbers}`);
}
let input = [ 2, 5, 10 ];
processArray(input);