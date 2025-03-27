let n = Number(prompt("Nhập số phần tử của mảng:"));

if (n < 0) {
    document.writeln("Số lượng phần tử không được âm");
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    let arr = [];
    let sum = 0;
    let check = false;

    for (let i = 0; i < n; i++) {
        let num = prompt(`Nhập phần tử thứ ${i}:`);

        if (!isNaN(num)) {
            let input = Number(num);
            arr.push(input);
            sum += input;
            check = true;
        }
    }

    if (check) {
        document.writeln(sum);
    } else {
        document.writeln("Không có phần tử nào là số");
    }
}
