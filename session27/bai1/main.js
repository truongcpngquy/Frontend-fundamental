while (true) {
    alert(`========Menu========
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
====================`)
    let choice = Number(prompt("Nhập lựa chọn từ 1-5"))
    switch (choice) {
        case 1:
            tong()
            break
        case 2:
            tru()
            break
        case 3:
            nhan()
            break
        case 4:
            chia()
            break
        case 5:
            break
        default:
            alert("Lựa chọn không hợp lệ")
    }
    if (choice == 5) break
}

function tong() {
    let a = Number(prompt("Nhập một số"))
    let b = Number(prompt("Nhập một số"))
    alert(`tong 2 so ${a} + ${b} = ${a + b}`)
}
function tru() {
    let a = Number(prompt("Nhập một số"))
    let b = Number(prompt("Nhập một số"))
    alert(`tru 2 so ${a} - ${b} =  ${a - b}`)
}
function nhan() {
    let a = Number(prompt("Nhập một số"))
    let b = Number(prompt("Nhập một số"))
    alert(`nhan 2 so ${a} * ${b} = ${a * b}`)
}

function chia() {
    let a = Number(prompt("Nhập một số"))
    let b = Number(prompt("Nhập một số"))
    alert(`chia 2 so ${a} : ${b} =  ${a % b}`)
}