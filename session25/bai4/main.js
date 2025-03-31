function isPrimeNumber(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return  false;
        }
    }
    return true
}
let n = 17
if(isPrimeNumber(n)){
    console.log(`${n} là số nguyên tố`)
}else{  
    console.log(`${n} không phải là số nguyên tố`)
}