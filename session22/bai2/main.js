let arr = [2, 5, 7, 4, 1, 8, 6];

let input = Number(prompt("Nhập một số:"));
let check = false
for (key in arr) {
    if (input == arr[key]) {
        document.writeln("bingo")
        check = true
        break
    }
}

if (!check) {
    document.writeln("Chúc bạn may mắn lần sau")
}