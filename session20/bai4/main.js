let str = prompt("Mời bạn nhập một chuỗi: ");
let char = prompt("Mời bạn nhập vào ký tự muốn tìm kiếm: ");
let temp = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { 
        temp = true;
        break; 
    }
}

if (temp) {
    document.writeln("Ký tự " + char + " tồn tại trong chuỗi " + str);
} else {
    document.writeln("Ký tự " + char + " không tồn tại trong chuỗi " + str);
}
