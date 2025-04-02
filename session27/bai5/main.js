function splitArray(arr, n) {
    if (!Array.isArray(arr) || n <= 0 || !Number.isInteger(n)) {
        return "Dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }

    return result;
}

let n = Number(prompt("Nhập số phần tử trong mỗi nhóm:"));
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(splitArray(arr, n));
