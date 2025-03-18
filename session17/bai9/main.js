let number1 = Number(prompt("Nhập số a: "));
let number2 = Number(prompt("Nhập số b: "));
let number3 = Number(prompt("Nhập số c: "));

let denta = (number2*number2)-4*number1*number3;

let x1 = (-number2 + Math.sqrt(denta)) / (2*number1);
let x2 = (-number2 - Math.sqrt(denta)) / (2*number1);

document.write("x1= "+x1);
document.write("<br>x2= "+x2);