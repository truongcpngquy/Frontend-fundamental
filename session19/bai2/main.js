let input = prompt("Nhập một ký tự:");

if (input.length === 1 && ((input >= 'A' && input <= 'Z') || (input >= 'a' && input <= 'z'))) {
    document.writeln(input + " là chữ cái");
} else {
    document.writeln(input + " không phải là chữ cái");
}
