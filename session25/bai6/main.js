let str = "aloola"
function isPalindrome(str) {
  //dao nguoc chuoi lai
  let reverseString = str.split('').reverse().join('');
  if(reverseString === str){
    return true
  } else{
    return false
  }
}

if(isPalindrome(str)){
console.log("Là mảng đối xứng")
}else{
console.log("Không phải là mảng đối xứng")
}