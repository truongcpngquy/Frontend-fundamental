let number1 = Number(prompt("Mời bạn nhập vào số a"));
let number2 = Number(prompt("Mời bạn nhập vào số b"));
let operator = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");

let result;

switch (operator) {
    case "+":
        result = number1 + number2;
        alert("Kết quả của phép tính trên: a + b = "+ result)
        break;
    case "-":
        result = number1 - number2;
        alert("Kết quả của phép tính trên: a - b = "+ result)
        break;
    case "*":
        result = number1 * number2;
        alert("Kết quả của phép tính trên: a * b = "+ result)
        break;
    case "/":
            result = number1 / number2;
        alert("Kết quả của phép tính trên: a / b = "+ result)
        break;
    default:
        alert("Phép toán không hợp lệ!");
}

