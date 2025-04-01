function checkStr(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 5) {
        arr1.push(arr[i])
      }
    }
    return arr1
  }
  let arr = ["apple", "banana", "cat", "elephant", "dog"];
  let arr1 = checkStr(arr)
  if(arr1.length==0){
    document.writeln("Mảng rỗng")
  }else{
    document.writeln(arr1)
  }