let number = prompt("Nhập vào một dãy số:");

if (isNaN(number)) {
    document.writeln("Dãy số nhập vào không hợp lệ");
} else {
    let array = number.split("");
    let max = -Infinity;

    for (let num of array) {
        max = Math.max(max, Number(num));
    }

    document.writeln(max + " là số lớn nhất");
}