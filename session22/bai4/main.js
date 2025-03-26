let number = prompt("Nhập vào một dãy số:");

if (isNaN(number)) {
    document.writeln("Dãy số nhập vào không hợp lệ");
} else {
    let arr = number.split("");
    let max = arr[0]; 

    for (let i=0;i<arr.length;i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    document.writeln(max + " là số lớn nhất");
}