let products = [
    { id: 1, name: "Mèn mén", price: 20000, quantity: 20 },
    { id: 2, name: "Mứt", price: 80000, quantity: 21 },
    { id: 3, name: "Cơm lam", price: 40000, quantity: 15 },
    { id: 4, name: "Bánh đậu xanh", price: 60000, quantity: 30 }
];

let cart = [];

while (true) {
    let choice = parseInt(prompt(`========== Menu ==========
1. Hiển thị danh sách sản phẩm
2. Thêm sản phẩm vào giỏ hàng
3. Sắp xếp cửa hàng theo giá
4. Tính tổng tiền
5. Thoát
==============================
Vui lòng nhập lựa chọn:`));

    switch (choice) {
        case 1:
            displayProducts();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            sortProductsByPrice();
            break;
        case 4:
            getTotalCost();
            break;
        case 5:
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 5) break;
}

function displayProducts() {
    let list = "Danh sách sản phẩm:\n";
    products.forEach(p => {
        list += `${p.id}. ${p.name} - ${p.price} VND (Còn lại: ${p.quantity})\n`;
    });
    alert(list);
}

function addToCart() {
    let productId = parseInt(prompt("Nhập ID sản phẩm muốn thêm:"));
    let product = products.find(p => p.id === productId);

    if (!product) {
        console.log("Sản phẩm không tồn tại.");
        return;
    }

    if (product.quantity <= 0) {
        console.log(`Sản phẩm ${product.name} đã hết hàng.`);
        return;
    }

    let buyQty = parseInt(prompt(`Bạn muốn mua bao nhiêu? (Tối đa ${product.quantity}):`));

    if (isNaN(buyQty) || buyQty <= 0 || buyQty > product.quantity) {
        console.log("Số lượng không hợp lệ.");
        return;
    }

    let itemInCart = cart.find(item => item.id === product.id);

    if (itemInCart) {
        itemInCart.quantity += buyQty;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: buyQty });
    }

    product.quantity -= buyQty;
    console.log(`${product.name} x${buyQty} đã được thêm vào giỏ hàng.`);
}

function displayCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống.");
        return;
    }

    let message = "Giỏ hàng của bạn:\n";
    cart.forEach(item => {
        message += `${item.name} - ${item.price} VND x ${item.quantity} = ${item.price * item.quantity} VND\n`;
    });
    alert(message);
}

function sortProductsByPrice() {
    let type = prompt("1. Tăng dần\n2. Giảm dần\nChọn kiểu sắp xếp:");

    if (type === "1") {
        products.sort((a, b) => a.price - b.price);
    } else if (type === "2") {
        products.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }

    displayProducts();
}

function getTotalCost() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng số tiền cần thanh toán: ${totalCost} VND`);
}
