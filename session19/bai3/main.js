let choice = Number(prompt("0: để đổi từ VND sang USD 1: để đổi từ USD sang VND"));
let cost;
if(choice === 0){
    cost = Number(prompt("Nhập số tiền bạn muốn đổi (VND -> USD): "));
} else if(choice === 1){
    cost = Number(prompt("Nhập số tiền bạn muốn đổi (USD -> VND): "));
}else {
    alert("Không hợp lệ");
}
switch(choice){
    case 0:
    {
        let change;
        change = cost / 23000;
        document.writeln(cost +" VND = "+ change +" USD");
        break;
    }
    case 1:
   {
       let change;
       change = cost * 23000;
       document.writeln(cost +" USD = "+ change +" VND");
       break;
   }
}
