let number1 = Number(prompt("Mời bạn nhập số a: "));
let number2 = Number(prompt("Mời bạn nhập số b: "));
if(isNaN(number1) || isNaN(number2) || number2 < 0){
    document.writeln("Không hợp lệ");
} else{
    let result = 1;
    for(let i = 1; i <= number2; i++ ){
        result *= number1;
    }
    document.writeln("Lũy thừa bậc "+ number2 +" của "+ number1 +" là: "+ result);
}