let pi = 3.14
while (true) {
    alert(`========Menu========
1. Diện tích hình tròn.
2. Chu vi hình tròn.
3. Diện tích hình chữ nhật.
4. Chu vi hình chữ nhật
5. Thoát.
====================`)
let choice = Number(prompt("moi nhap lua chon"))
switch(choice){
    case 1:
        sHinhTron()
        break
    case 2:
        cHinhTron()
        break
    case 3:
        sChuNhat()
        break
    case 4:
        cChuNhat()
        break
    case 5:
        break
    default:
        alert("lua chon khong hop le!")
}
if(choice == 5)break
}
function sHinhTron(){
    let r = Number(prompt("nhap ban kinh hinh tron"))
    alert(`Dien tich hinh tron la: ${pi*(r*r)}`)
}
function cHinhTron(){
    let r = Number(prompt("nhap ban kinh hinh tron"))
    alert(`Chu vi hinh tron la: ${2*pi*r}`)
}
function sChuNhat(){
    let l = Number(prompt("Nhap chieu dai hinh chu nhat"))
    let w = Number(prompt("Nhap chieu rong hinh chu nhat"))
    alert(`Dien tich hinh chu nhat la: ${l*w} `)
}
function cChuNhat(){
    let l = Number(prompt("Nhap chieu dai hinh chu nhat"))
    let w = Number(prompt("Nhap chieu rong hinh chu nhat"))
    alert(`Dien tich hinh chu nhat la: ${2*(l+w)} `)
}