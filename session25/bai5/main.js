function positiveInteger(arr){
    let count = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0 && Number.isInteger(arr[i])){
            count++
        }
    }
    return count
}

let arr =  [1.1, 5.4, -2]
let count = positiveInteger(arr)
if(count > 0){
console.log(count)
}else{
    console.log("Mảng không có số nguyên dương")
}