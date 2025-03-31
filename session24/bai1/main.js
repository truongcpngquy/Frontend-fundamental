let arr = []
while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần suất hiện của phần tử trong mảng
6. Sắp xếp mảng tăng dần 
7. Thoát
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
            // tìm phần tử lớn nhất
            let maxCount = arr[0]
            let minCount = arr[0]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxCount) {
                    maxCount = arr[i]
                }
                if (arr[i] < minCount) {
                    minCount = arr[i]
                }
            }
            alert(`Phần tử lớn nhất là ${maxCount}, phần tử nhỏ nhất là ${minCount}`)
            break;
        case 4:
            // tổng các phần tử trong mảng
            let sum = 0
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`)
            break;
        case 5:
            let count = 0
            let a = Number(prompt("Nhập phần tử cần tìm"))
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === a) {
                    count++
                }
            }
            if (count == 0) {
                alert("Phần tử không tồn tại trong mảng")
            } else {
                alert(`Số lần xuất hiện của ${a} là ${count} lần`)
            }
            break;
        case 6:
            // sắp sếp tăng dần
            let temp = 0
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }
            break;
        case 7:
            break;
        default: {
            alert("Lựa chọn không hợp lệ!")
        }
            break;
    }
    if (choice == 7) {
        break
    }
}

