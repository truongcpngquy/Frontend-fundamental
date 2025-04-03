const employees = []

while (true) {
    alert(`========Menu========
1. Them nhan vien
2. Xoa nhan vien
3. Cap nhap muc luong nhan vien
4. Tim kiem nhan vien
5. Thoat
====================`)
    let choice = parseInt(prompt("Nhap lua chon cua ban"))
    switch (choice) {
        case 1:
            addEmployees()
            break
        case 2:
            deleteEmployee()
            break
        case 3:
            updateSalary()
            break
        case 4:
            searchEmployee()
            break
        case 5:
            break
        default:
            alert("lua chon khong hop le!")
    }
    if (choice == 5) break
}
// them nhan vien
function addEmployees() {
    let id = prompt("Nhap id")
    let name = prompt("Nhap ten")
    let position = prompt("nhap position")
    let salary = prompt("Nhap salary")
    let newEmployees = {
        id,
        name,
        position,
        salary
    }
    employees.push(newEmployees)
    alert("them nhan vien thanh cong!")
}
// tim kiem theo id
function finEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}
// xoa nhan vien
function deleteEmployee() {
    let id = prompt("Nhap id nhan vien muon xoa");
    let employee = finEmployeeById(id);

    if (employee) {
        let confirmDelete = confirm(`Tim thay nhan vien: ${employee.id}. Ban co chac muon xoa?`);
        if (confirmDelete) {
            const index = employees.indexOf(employee);
            employees.splice(index, 1);
            alert("Nhan vien da duoc xoa!");
        }
    } else {
        alert("Khong tim thay nhan vien!");
    }
}
// cap nhap luong
function updateSalary() {
    let id = prompt("Nhap id nhan vien can cap nhat luong");
    let employee = finEmployeeById(id);
    if (employee) {
        let salary = prompt("nhap muc luong muon cap nhat");
        employee.salary = salary;
        alert("Cap nhat luong thanh cong!");
    } else {
        alert("Khong tim thay nhan vien!");
    }
}
// tim kiem nhan vien
function searchEmployee() {
    let id = prompt("Nhap id nhan vien can tim kiem");
    let employee = finEmployeeById(id);
    if (employee) {
        return alert(`ID: ${employee.id} - Ten: ${employee.name} - Vi tri: ${employee.position} - Muc luong: ${employee.salary}`)
    } else {
        alert("Khong tim thay nhan vien!");

    }
}