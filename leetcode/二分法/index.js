let arr = [1,2,3,5,7,10,11,13,15,18,20,23]  //顺序数组
// arr.forEach((val,index) => {  //n
//   if(val === 20) {
//     console.log(index)
//   }
// })

// arr得为顺序数组
function search(arr,item) { //O(logn)
  let low = 0
  let heigh = arr.length -1
  let mid
  let element
  while (low<=heigh) {  //数组当中有数
    mid = Math.floor((low+heigh)/2)
    element = arr[mid]
    if(element < item) {
      low = mid + 1
    }
    else if(element>item) {
      heigh = mid - 1
    } else {
      return mid
    }
  }
  return 
}
console.log(search(arr,20))