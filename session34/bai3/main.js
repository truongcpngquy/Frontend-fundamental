function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ Email và Mật khẩu.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const foundUser = users.find(user => user.email === email && user.password === password);
  
    if (!foundUser) {
      alert("Email hoặc Mật khẩu không chính xác.");
      return;
    }
  
    // Lưu người dùng hiện tại vào localStorage
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
  
    // Chuyển trang sau khi đăng nhập thành công
    window.location.href = "home.html"; // hoặc "index.html" nếu bạn dùng trang khác
  }
s  