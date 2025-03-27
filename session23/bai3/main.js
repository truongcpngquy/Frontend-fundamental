let n = Number(prompt("Nhập số phần tử của mảng:"))

if (n < 0) {
    document.writeln("Số lượng phần tử không hợp lệ")
} else if (n === 0) {
    document.writeln("Mảng không có phần tử")
} else {
    let arr = []
    let count = 0

    for (let i = 0; i < n; i++) {
        let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"))
        arr.push(num)
        if (Math.floor(num) === num && num < 0) {
            count++
        }
    }

    document.writeln("Số nguyên âm trong mảng: ", count, " số")
}

