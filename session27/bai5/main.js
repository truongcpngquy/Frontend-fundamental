function splitArray(arr, n) {
    if (!Array.isArray(arr) || isNaN(n) || n <= 0 || n > arr.length) {
        return "dữ liệu không hợp lệ";
    }

    let size = Math.ceil(arr.length / n); 
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

let n = Number(prompt("Nhập số nhóm muốn chia:"));
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(splitArray(arr, n));
