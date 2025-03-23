let n = Number(prompt("Nhập một số bất kì"));
if(isNaN(n)  || (n<0)){
    document.writeln("Dữ liệu nhập vào không hợp lệ")
}else{
    document.writeln("Các số nguyên tố chia hết cho 5 từ 1 đến "+ n +" là: ")
    for(let i=1; i<=n ; i++){
        if(i % 5 === 0){
            document.writeln(i+", ")
        }
    }
}