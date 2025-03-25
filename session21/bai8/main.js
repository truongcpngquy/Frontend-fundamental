console.log("Các số amstrong có 3 chữ số là:");
for (let i = 100; i < 1000; i++) {
    let a = Math.floor(i / 100);
    let b = Math.floor((i % 100) / 10);
    let c = i % 10;
    if (i === Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) {
        document.writeln(i+", ");
    }
}