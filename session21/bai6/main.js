let number = Number(prompt("Nhập một số nguyên bất kì:"));
if (isNaN(number) || (number <= 0)) {
    document.writeln("Dữ liệu nhập vào không hợp lệ");
} else {
    document.writeln(`Các ước của ${number} là:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            document.writeln(i);
        }
    }
}
