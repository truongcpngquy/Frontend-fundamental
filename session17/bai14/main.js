let r = Number(prompt("Nhập bán kính: "));
let h = Number(prompt("Nhập chiều cao: "));
let pi = 3.14;

let sXungQuanh = 2*pi*r*h;
document.writeln("Diện tích xung quanh hình trụ là: "+ sXungQuanh +"<br>");

let sToanPhan = (2*pi*r*h)+(2*pi*r*r); 
document.writeln("Diện tích toàn phần hình trụ là: "+ sToanPhan +"<br>");

let V = pi*r*r*h;
document.writeln("Thể tích hình trụ là: "+ V +"<br>");

let C = 2*pi*r;
document.writeln("Chu vi hình trụ là: "+ C);