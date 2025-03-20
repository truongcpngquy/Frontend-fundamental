let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let c = Number(prompt("Nhập số c: "));
let delta = (b * b) - 4 * a * c;
let sqrtDelta = Math.sqrt(delta);
let x1 = (-b + sqrtDelta) / (2 * a);
let x2 = (-b - sqrtDelta) / (2 * a);
if(delta < 0){
    document.writeln("Phương trình vô nghiệm");
} else if(delta === 0){
    document.writeln("Phương trình có nghiệm kép: x1 = x2 = "+ x1)
} else if(delta > 0){
    document.writeln("Phương trình có hai nghiệm phân biệt x1 = "+ x1 +"và x2 ="+ x2);
}