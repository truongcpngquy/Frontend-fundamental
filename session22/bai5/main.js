let input = prompt("Nhập chuỗi số nguyên");
let arr = input.split("").map(Number);
let chan = 0;
let le = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        chan += arr[i];
    } else {
        le += arr[i];
    }
}


document.writeln("Tổng các số chẵn:", chan);
document.writeln("Tổng các số lẻ:", le);
