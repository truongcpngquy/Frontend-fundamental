let sum = 0; 

for (let i = 1; i <= 5; i++) {
    let number = Number(prompt("Nhập số nguyên thứ"+ i));

    if (isNaN(number)) { 
        console.log("Số không hợp lệ. Hãy chạy lại chương trình!"); 
        break; 
    }

    if (number % 2 !== 0) { 
        sum += number;
    }
}

if (sum) {
    console.log("Tổng các số lẻ là: " + sum);
}
