let n = Number(prompt("Nhập số phần tử của mảng:"))

if (n === 0) {
    document.writeln("Mảng không có ký tự số")
} else {
    let arr = []
    let count = 0
    for (let i = 0; i < n; i++) {
        let num = prompt(`Nhập phần tử thứ ${i}`)
        if (!isNaN(num)) {
            arr.push(num)
            count++
        }
    }
    document.writeln(arr.join(" "))
}