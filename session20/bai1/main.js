let n = Number(prompt("Nhập một số bất kì"));
if(isNaN(n)  || (n<0)){
    document.writeln("Dữ liệu nhập không hợp lệ")
}else{
    let sum = 0;
    for(let i=0; i<=n ; i++){
        sum += i 
    }
    document.writeln(sum);
}