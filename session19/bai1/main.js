let input = Number(prompt("Nhập tháng bất kì"))
if(input > 0 && input <= 12){
    if(input == 4 || input == 6 || input == 9 || input == 11){
        document.writeln("Tháng "+ input +" có 30 ngày")
    }else if (input == 2){
        document.writeln("Tháng "+ input +" có 28 hoặc 29 ngày theo năm nhuận")
    }else{
        document.writeln("Tháng "+ input +" có 31 ngày")
    }
}else{
    document.writeln("Tháng không hợp lệ")
}
