const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 39990000,
      image: 'https://bizweb.dktcdn.net/100/512/769/products/dell-xps-9510-laptop-k1-2.jpg?v=1714385196703',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 39990000,
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPyKIaRAep6GQz42DXqD6SoYM9c5cB_DicxZWrM5Luw4J6Ckg3',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypu2EDzSXn0jQ66QHB80SR1bDd_XoLF4whKR3H4Q-UaEZgi8c',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7999000,
      image: 'https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 9990000,
      image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/176/601/products/blue.jpg?v=1685355892393',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
  ];
  
  function renderProducts(data) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    data.forEach(product => {
      container.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>Giá:</strong> ${product.price.toLocaleString()} VND</p>
            </div>
            <div class="card-footer">
              <button class="btn">Mua</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  document.getElementById('searchBtn').addEventListener('click', function () {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    );
    renderProducts(filtered);
  });
  
  
  // Load toàn bộ sản phẩm khi mở trang
  renderProducts(products);
  