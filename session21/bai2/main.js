let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`Nhập số nguyên thứ ${i + 1}:`));

    if (isNaN(num)) { 
        document.writeln("Dữ liệu nhập vào không hợp lệ.");
        evenCount = 0;
        oddCount = 0;
        break;
    }

    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

if (evenCount + oddCount === 10) {
    document.writeln(`Số chẵn: ${evenCount}, Số lẻ: ${oddCount}`);
}
