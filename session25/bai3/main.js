function checkEvenNumber(arr) {
    let evenNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers.push(arr[i])
        }
    }
    return evenNumbers;
}

let arr = [1, 3, 5, 7] 

let evenNumbers = checkEvenNumber(arr)
if (evenNumbers.length > 0) {  
    console.log(evenNumbers)
} else {
    console.log("Mảng không chứa số chẵn")
}

