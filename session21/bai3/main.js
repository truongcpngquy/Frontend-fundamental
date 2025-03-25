let n = "admin";  
let check = true;

while (check) {
    let password = prompt("Nhập mật khẩu:");
    if (password === n) {
        document.writeln("Đăng nhập thành công!");
        check = false;
    }else {
        alert("Mật khẩu sai, vui lòng nhập lại!"); 
    }
}

