let str = prompt("nhập password");
function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return false
    }
    return true
}
if (isStrongPassword(str)) {
    console.log("Mật khẩu mạnh")
} else {
    console.log("Mật khẩu yếu!")
}