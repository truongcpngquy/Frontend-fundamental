let number = [1, 22, 12, 8, 7, 9]
check = true

for (let i = 0; i < number.length; i++) {
    if (number[i] >= 10) {
        document.writeln(number[i])
        check = false
    }
}
if (check) {
    document.writeln("Không có số lớn hơn 10")
}