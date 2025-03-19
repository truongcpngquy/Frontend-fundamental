let year = Number(prompt("Nhập số năm:"));

if(year<1){
   document.writeln("Mới vào nghề");
}else if(year>=1 && year<3){
    document.writeln("Nhân viên có kinh nghiệm")
}else if(year>=4 && year<=6){
    document.writeln("Chuyên viên")
}else{
   document.writeln("Quản lý")
}