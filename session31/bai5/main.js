// Khai báo mảng nhân viên
const employees = [
    { stt: 1, name: "Nguyễn Văn A", age: 25, address: "Hồ Chí Minh" },
    { stt: 2, name: "Trần Thị B", age: 30, address: "Hà Nội" },
    { stt: 3, name: "Lê Văn C", age: 28, address: "Đà Nẵng" },
    { stt: 4, name: "Phạm Thị D", age: 32, address: "Cần Thơ" },
    { stt: 5, name: "Hoàng Văn E", age: 27, address: "Bình Dương" }
];

let show = document.getElementById("table");

employees.forEach(employee => {
    let value = document.createElement("tr");
    value.innerHTML = `
        <td>${employee.stt}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `;
    show.appendChild(value);
});

