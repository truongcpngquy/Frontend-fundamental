function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com'.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("Email đã được đăng ký.");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
}
localStorage.clear()
