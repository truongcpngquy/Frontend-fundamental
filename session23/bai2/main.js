let number = [1, 2, 3, 4, 5, 6]
let maxCount = 0
let n = 0

for (let i = 0; i < number.length; i++) {
    if (number[i] > maxCount) {
        maxCount = number[i]
        n = i
    }
}

document.writeln("Số lớn nhất: ", maxCount, "<br>")
document.writeln("Vị trí: ", n)