let username = prompt("Nhập tên đăng nhập:");

if (username == "ADMIN") {
    let password = prompt("Nhập mật khẩu:");

    if (password == "TheMaster") {
        document.writeln("Welcome.");
    } else if (password == null) {
        document.writeln("Cancelled.");
    } else {
        document.writeln("Wrong password.");
    }
} else if (username == null || username == "") {
    document.writeln("Cancelled.");
} else {
    document.writeln("I don’t know you.");
}
