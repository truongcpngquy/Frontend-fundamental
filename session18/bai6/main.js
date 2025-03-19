let year = Number(prompt("Nhập năm muốn kiểm tra: "));

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)) {
    document.writeln(year + " là năm nhuận.");
} else {
    document.writeln(year + " không phải là năm nhuận.");
}
