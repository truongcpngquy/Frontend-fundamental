let arr = []; 
while (true) {
    alert(`========Menu========
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
====================`)
    let choice = Number(prompt("Nhập lựa chọn từ 1-5"))
    switch (choice) {
        case 1:
            addList()
            break
        case 2:
            avg()
            break
        case 3:
            max()
            break
        case 4:
            min()
            break
        case 5:
            break
        default:
            alert("Lựa chọn không hợp lệ")
    }
    if (choice == 5) break
}

function addList() {
    arr = [] 
    let n = parseInt(prompt("Nhập số phần tử của mảng"))
    for (let i = 0; i < n; i++) {
        let arr1 = Number(prompt(`Nhập phần tử thứ ${i + 1}:`))
        arr.push(arr1)
    }
    alert(`Mảng đã nhập: ${arr.join(", ")}`)
}
function avg() {
    if (arr.length === 0) {
        alert("Chưa có mảng nào được nhập.")
        return
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    alert(`Trung bình các số trong mảng là: ${average}`);
}
function max() {
    if (arr.length === 0) return alert("Mảng rỗng!");  

    let maxEven = -Infinity; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > maxEven) {
            maxEven = arr[i];  
        }
    }

    if (maxEven === -Infinity) {
        alert("Không có số chẵn trong mảng.");
    } else {
        alert(`Số chẵn lớn nhất trong mảng là: ${maxEven}`);
    }
}

function min() {
    if (arr.length === 0) return alert("Mảng rỗng!");

    let minOdd = Infinity; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] < minOdd) {
            minOdd = arr[i];  
        }
    }

    if (minOdd === Infinity) {
        alert("Không có số lẻ trong mảng.");
    } else {
        alert(`Số lẻ nhỏ nhất trong mảng là: ${minOdd}`);
    }
}