let n = 10
let count = 0
let x = 2
while(count<n){
  let check = true
  for(let i = 2; i <= Math.sqrt(x); i++){
    if(x % i == 0){
      check = false
      break
    }
  }
  if(check){
    document.writeln(x)
    count++
  }
  x++
}