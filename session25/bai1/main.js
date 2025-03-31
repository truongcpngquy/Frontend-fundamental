function minCount(arr){
    let min = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<min)
            min = arr[i]
    }
    return min 
}
let arr = [2, 3, 1, 4, 5]
console.log(minCount(arr))