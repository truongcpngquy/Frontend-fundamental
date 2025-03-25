let money = Number(prompt("Nhập vào số tiên gửi"))
let month = Number(prompt("Nhập vào số tháng gửi"))
let interest = 1; 

let r = interest / 100; 

let m = money;

for (let i = 0; i < month; i++) {
    m = m * (1 + r);
}

let mInterest = m - money;

console.log("Tiền lãi:", interest.toFixed(3));
console.log("Tiền nhận được:", m.toFixed(3));
