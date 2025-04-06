let contacts = [];
let id = 0;
while (true) {
    let choice = parseInt(prompt(`==========Menu==========
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.
========================
Vui long nhap lua chon`));
    switch (choice) {
        case 1:
            addContact();
            break
        case 2:
            displayContactList();
            break
        case 3:
            searchContact();
            break
        case 4:
            updateContact()
            break
        case 5:
            deleteContact()
            break
        case 6:
            break
        default:
            alert("Lựa chon không họp lệ");
    }
    if (choice == 6) break
}

function addContact() {
    id++;
    let name = prompt("Nhập liên hệ");
    let email = prompt("Nhập email");
    let phone = prompt("Nhập sdt");
    let newContact = {
        id,
        name,
        email,
        phone,
    }
    contacts.push(newContact);
    alert("Thêm liên hệ thành công!");
}

function displayContactList() {
    if (contacts.length === 0) {
        alert("Chưa có liên hệ nào!");
        return
    }
    let contact = "";
    for (const key of contacts) {
        contact += `ID: ${key.id}, Name: ${key.name}, Email: ${key.email}, Phone: ${key.phone}\n`;
    }
    alert(contact);
}

function searchContact() {
    let phone = prompt("Nhập SDT muốn tìm kiếm")
    let contact = findContact(phone)
    if (contact) {
        return alert(`ID: ${contact.id} - Ten: ${contact.name} - Email: ${contact.email} - SDT: ${contact.phone}`)
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function findContact(value) {
    return contacts.find(contacts => contacts.id === value || contacts.phone === value);
}

function updateContact() {
    let id = prompt("Nhập ID liên hệ cần cập nhật");
    let contact = findContact(id)
    if (contact) {
        let name = prompt("Nhập tên muốn cập nhật");
        contact.name = name;
        let email = prompt("Nhập email muốn cập nhật");
        contact.email = email;
        let phone = prompt("Nhập SDT muốn cập nhật");
        contact.phone = phone;
        alert("Cập nhật liên hệ thành công!");
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function deleteContact() {
    let id = prompt("Nhập ID liên hệ muốn xóa");
    let contact = findContact(id);

    if (contact) {
        let confirmDelete = confirm(`Tìm thấy liên hệ: ${contact.id}. Bạn có chắc muốn xóa?`);
        if (confirmDelete) {
            const index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            alert("Liên hệ đã đươc xóa");
        }
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}