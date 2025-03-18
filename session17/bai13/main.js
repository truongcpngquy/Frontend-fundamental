let gui = Number(prompt('Mời bạn nhập số tiền gửi:'));
let month = Number(prompt('Mời bạn nhập số tháng gửi:'));
let laiSuat = 4.3 / 100; 
let tienLai = gui * laiSuat * (month / 12); 
document.writeln("Số tiền lãi nhận được là: " + tienLai.toLocaleString("vi-VN") + " VND");
