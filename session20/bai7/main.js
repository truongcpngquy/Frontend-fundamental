let a = 1
let b = 1
let n = 8
for(let i = 0; i<=n; i++){
    document.writeln(a)
    let next = a + b
    a = b
    b = next
} 

document.writeln()