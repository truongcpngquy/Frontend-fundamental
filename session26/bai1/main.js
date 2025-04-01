let arr = [5, 10, 22, 2, 9]
function locGiaTri(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return false
        }
        if (arr[i] >= 10) {
            arr1.push(arr[i])
        }
    }
    return arr1
}
let arr1 = locGiaTri(arr)
if (arr1 === false) {
    document.writeln("du kieu khong hop le")
} else if (arr1.length == 0) {
    document.writeln("Mang khong co phan tu nao")
} else {
    document.writeln(locGiaTri(arr).join(" "))
}