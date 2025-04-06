let products = [];
let id = 0;

while (true) {
    let choice = parseInt(prompt(`==========Menu==========
1. Thêm sản phẩm vào danh sách.
2. Hiển thị danh sách sản phẩm.
3. Tìm kiếm sản phẩm theo ID hoặc tên.
4. Cập nhật thông tin sản phẩm theo ID.
5. Xóa một sản phẩm khỏi danh sách theo ID.
6. Thoát.
========================
Vui lòng nhập lựa chọn`));

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProductList();
            break;
        case 3:
            searchProduct();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
    if (choice === 6) break;
}

function addProduct() {
    id++;
    let name = prompt("Nhập tên sản phẩm");
    let price = parseFloat(prompt("Nhập giá sản phẩm"));
    let category = prompt("Nhập danh mục sản phẩm");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm"));
    
    let newProduct = { 
        id, 
        name, 
        price, 
        category, 
        quantity };
    products.push(newProduct);
    alert("Thêm sản phẩm thành công!");
}

function displayProductList() {
    if (products.length === 0) {
        alert("Chưa có sản phẩm nào!");
        return;
    }
    let productList = "";
    for (const product of products) {
        productList += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}\n`;
    }
    alert(productList);
}

function searchProduct() {
    let value = prompt("Nhập ID hoặc tên sản phẩm muốn tìm kiếm");
    let product = findProduct(value);
    
    if (product) {
        alert(`ID: ${product.id} - Name: ${product.name} - Price: ${product.price} - Category: ${product.category} - Quantity: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function findProduct(value) {
    return products.find(product => product.id == value || product.name == value);
}

function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật"));
    let product = findProduct(id);
    
    if (product) {
        product.name = prompt("Nhập tên mới");
        product.price = parseFloat(prompt("Nhập giá mới"));
        product.category = prompt("Nhập danh mục mới");
        product.quantity = parseInt(prompt("Nhập số lượng mới"));
        alert("Cập nhật sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm muốn xóa"));
    let product = findProduct(id);

    if (product) {
        let confirmDelete = confirm(`Tìm thấy sản phẩm: ${product.id}. Bạn có chắc muốn xóa?`);
        if (confirmDelete) {
            const index = products.indexOf(product);
            products.splice(index, 1);
            alert("Sản phẩm đã được xóa");
        }
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}
