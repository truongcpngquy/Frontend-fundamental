let number = prompt("Nhập một số:");
let array = number.split("");
array.reverse();
array.forEach(num => document.writeln(num));