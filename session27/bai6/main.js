function isArithmeticSequence(arr) {
    if (arr.length < 2 || !Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let check = arr[1] - arr[0];
    for (let i = 2
        ; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== check) {
            return false;
        }
    }
    return true;
}
let arr = [1, 2, 4, 6, 8]
console.log(isArithmeticSequence(arr) ? "TRUE" : "FALSE"); 

