let number = Number(prompt("Mời bạn nhập một số bất kì: "));
if(number % 3 === 0 && number % 5 === 0){
    document.writeln(number +"  chia hết cho cả 3 và 5");
} else {
    document.writeln(number +" không chia hết cho cả 3 và 5");
}