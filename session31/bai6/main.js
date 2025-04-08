const validUsername = "huanrose@gmail.com";
const validPassword = "123456";

const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginButton.addEventListener("click", () => {
    const enterUsername = usernameInput.value;
    const enterPassword = passwordInput.value;

    if (enterUsername === validUsername && enterPassword === validPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại!");
    }
});