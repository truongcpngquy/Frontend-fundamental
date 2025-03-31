let arr = []
while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
            // tìm các phần tử chẵn lẻ
            let chan = []
            let le = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    chan.push(arr[i])
                }
                if (arr[i] % 2 != 0) {
                    le.push(arr[i])
                }
            }
            alert(`Các phần tử chẵn là: ${chan} và lẻ là: ${le}`)
            break
        case 4:
            // tính trung bình cộng
            let tbc = 0
            for (let i = 0; i < arr.length; i++) {
                tbc += arr[i]
            }
            tbc = tbc / arr.length
            alert(`Trung bình cộng của mảng là ${tbc}`)
            break
        case 5:
            // xóa phần tử 
            let a = Number(prompt("Nhập phần tử cần xóa"));
            let found = false; 
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === a) {
                    arr.splice(i, 1);
                    found = true;
                }
            }
            if (found) {
                alert("Phần tử đã được xóa.");
            } else {
                alert("Phần tử không tồn tại trong mảng.");
            }

            break
        case 6:
            let max1 = arr[0];
            let max2 = -Infinity;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max1) {
                    max2 = max1;
                    max1 = arr[i];
                } else if (arr[i] > max2 && arr[i] < max1) {
                    max2 = arr[i];
                }
            }

            if (max2 === -Infinity) {
                alert("Không có phần tử lớn thứ hai trong mảng.");
            } else {
                alert(`Phần tử lớn thứ hai trong mảng là: ${max2}`);
            }
            break
        case 7:
            break
        default:
            alert("Vui lòng nhập từ 1-7")
            break
    }
    if (choice == 7) {
        break
    }
}