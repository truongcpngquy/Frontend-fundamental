let arr = []
while (true) {
    alert(`---------------Menu----------------
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình      
------------------------------------`)
    let choice = Number(prompt("Nhập lựa chọn từ 1-7"))
    switch (choice) {
        case 1:
            arr = []
            let n = Number(prompt("Nhập số lượng phần tử cho mảng"))
            for (let i = 0; i < n; i++) {
                let str = prompt(`Nhập chuỗi thứ ${i + 1}`)
                arr.push(str)
            }
            alert("Mảng nhập thành công")
            break
        case 2:
            if (arr.length == 0) {
                alert("Mảng chưa được nhập")
            } else {
                let text = ""
                for (let i = 0; i < arr.length; i++) {
                    text += `${i + 1}. ${arr[i]}\n`
                }
                alert(text)
            }
            break
        case 3:
            if (arr.length == 0) {
                alert("Mảng chưa được nhập");
            } else {
                let text = " "
                for (let i = 0; i < arr.length; i++) {
                    text += `${i + 1}. ${arr[i]} - ${arr[i].length} ký tự\n`
                }
                alert(text)
            }
            break
        case 4:
            let a = prompt("Nhập vào ký tự muốn tìm kiếm")
            let count = 0
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] == a)
                        count++
                }
            }
            alert(`Số lần xuất hiện của ký tự ${a} là ${count} lần`)
            break
        case 5:
            let result = "";
            for (let i = 0; i < arr.length; i++) {
                let reversedStr = arr[i].split("").reverse().join("")
                if (arr[i] === reversedStr) {
                    result += `${i + 1}. ${arr[i]} là chuỗi đối xứng\n`
                } else {
                    result += `${i + 1}. ${arr[i]} không phải là chuỗi đối xứng\n`
                }
            }
            alert(result);
            break
        case 6:
            let z = "";
            for (let i = 0; i < arr.length; i++) {
                let words = arr[i].split(" ");
                for (let j = 0; j < words.length; j++) {
                    words[j] = words[j][0].toUpperCase() + words[j].slice(1);
                }
                arr[i] = words.join(" ");
                z += `${i + 1}. ${arr[i]}\n`;
            }
            alert(z);
            break
        case 7:
            break
        default:
            alert("Vui lòng nhập lựa chon từ 1-7")
    }
    if (choice == 7) {
        break
    }
}