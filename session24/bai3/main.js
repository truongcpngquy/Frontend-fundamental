let arr = []
while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình   
------------------------------------`)
    let choice = Number(prompt("Nhập lựa chon từ 1-7"))
    switch (choice) {
        case 1:
            // nhập mảng
            arr = []
            let n = Number(prompt("Nhập số lượng phần tử"))
            for (let i = 0; i < n; i++) {
                let num = Number(prompt(`Nhập phần tử thứ ${i + 1}`))
                arr.push(num)
            }
            alert("Mảng được nhập thành công")
            break;
        case 2:
            // hiển thị mảng
            if (arr.length == 0) {
                alert("Mảng chưa được nhập")
            } else {
                let text = ""
                for (let i = 0; i < arr.length; i++) {
                    text += `${i + 1}.${arr[i]}\n`
                }
                alert(text)
            }
            break;
        case 3:
            let max = arr[0]
            let index = 0
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i]
                    index = i
                }
            }
            alert(`Chỉ số của phần tử lớn nhất là: ${index + 1}`)
            break
        case 4:
            // tính tổng và trung bình cộng
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            if (count > 0) {
                let tbc = sum / count;
                alert(`Tổng các số dương: ${sum}, Trung bình cộng: ${tbc}`);
            } else {
                alert("Mảng không có số dương để tính trung bình cộng!");
            }
            break
        case 5:
            // đảo ngược mảng
            arr.reverse()
            alert("Mảng đã được đảo ngược")
            break
        case 6:
            // Kiểm tra đối xứng 
            let check = true;
            for (let i = 0; i < (arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    check = false;
                    break;
                }
            }

            if (check) {
                alert("Mảng đối xứng");
            } else {
                alert("Mảng không đối xứng");
            }
            break
        case 7:
            break
        default:
            alert("Vui lòng nhập từ 1-7")
    }
    if (choice == 7)
        break
}