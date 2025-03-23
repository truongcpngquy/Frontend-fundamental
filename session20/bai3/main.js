let n = prompt("Mời bạn nhập vào một số:");
if (isNaN(Number(n))) {
    document.writeln("Gía trị nhập vào không hợp lệ");
} else {
    let check = true; 
    for (let i = 0; i < (n.length / 2); i++) {
        if (n[i] !== n[n.length - 1 - i]) { 
            check = false;
            break; 
        }
    }
    
        
    if (check) {
        document.writeln("Là số đối xứng");
    } else {
        document.writeln("Không phải là số đối xứng");
    }
}
