let number = Number(prompt("Nhập vào số bất kì: "));

let check1 = (number >= 0) ? "yes" : "no";

let check2 = (check1 == "yes") ? Math.sqrt(number) : `${number} không phải số chính phương`;

let check3 = (check2 % 1 == 0) ? `${number} là số chính phương` : `${number} không phải số chính phương`;

document.writeln(check3);