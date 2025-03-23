let n = Number(prompt("Mời bạn nhập vào một số: "));
let isPrime = true;
if (isNaN(n) || n <= 1) {
  document.writeln("Số không hợp lệ");
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.writeln(n +" là số nguyên tố");
  } else {
    document.writeln(n +" Không phải số nguyên tố");
  }
}