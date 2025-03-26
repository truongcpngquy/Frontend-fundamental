let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let n = Number(prompt("Nhập một số"));
let found = 0;  
if (isNaN(n)) {
    document.writeln("Số không hợp lệ");
} else {
    for (let i=0;i< arr.length;i++) {
        if (arr[i] === n) {
            found++;
        }
    }
    if (found === 0) {
        document.writeln("Số " + n + " không tồn tại trong mảng")
    } else {
        document.writeln("Số " + n + " xuất hiện " + found + " lần trong mảng")
    }
}