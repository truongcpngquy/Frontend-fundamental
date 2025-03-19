let toan = Number(prompt("Nhập điểm toán:"));
let van = Number(prompt("Nhập điểm văn:"));
let anh = Number(prompt("Nhập điểm anh:"));

let dtb = (toan+van+anh)/3;

if(dtb>=8.0){
   document.writeln("Điểm trung bình: "+ dtb +"<br>");
   document.writeln("Xếp loại: Giỏi");
}else if(dtb>=6.5){
   document.writeln("Điểm trung bình: "+ dtb +"<br>");
    document.writeln("Xếp loại: Khá")
}else if(dtb>=5){
   document.writeln("Điểm trung bình: "+ dtb +"<br>");
    document.writeln("Xếp loại: Trung bình")
}else{
   document.writeln("Điểm trung bình: "+ dtb +"<br>");
   document.writeln("Xếp loại: Yếu")
}