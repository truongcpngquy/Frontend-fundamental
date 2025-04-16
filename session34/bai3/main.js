let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

if (accounts.length === 0) {
  accounts = [
    {
      email: "test@example.com",
      password: "123456",
      name: "Test User"
    }
  ];
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

document.getElementById("login").addEventListener("click", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    return;
  }

  let user = accounts.find(
    (acc) => acc.email === email && acc.password === password
  );

  if (user) {
    alert(`Chào mừng bạn}!`);
  } else {
    alert("Email hoặc mật khẩu không đúng.");
  }
});
