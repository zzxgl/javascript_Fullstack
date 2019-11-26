// [1,2,3,4,5,6,7]  k=3
// k=1 => [7,1,2,3,4,5,6]
// k=2 => [6,7,1,2,3,4,5]
// k=3 => [5,6,7,1,2,3,4]

// [-1,-100,3,99] k=2
// k=2 => [3,99,-1,-100]



// 空间复杂度为n 0(n) 代码性能低
// 时间复杂度为n
// function RShift (list, k) {
//   // 解构
//   const copy = [...list]
//   const n = list.length
//   if ( k%n === 0) return list
//   for( let i = 0 ; i<n; i++) {//[3,-1,-100,99]
//     list[i] = copy[(k + i) % n]
//   }
//   return list
// }


// 空间复杂度为 0(0)
// 时间复杂度为 n*k
// function RShift (list, k) {
//   const n = list.length
//   if ( k%n === 0) return list
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null
//   while(cnt--) {
//     t = list[n-1] //99
//     // 右移一位
//     for( let i = n-1; i>0; i--) {
//       list[i] = list[i-1]
//       console.log(list)
//     }
//     list [0] = t
//   }
//   return list
// }

// 三次翻转法 [0,n-k-1] [n-k,n-1] [0,n-1]
// [1,2,3,4,5,6,7] => [5,4,3,2,1,6,7] => [5,4,3,2,1,7,6] => [6,7,1,2,3,4,5]
// 时间复杂度n 空间复杂度为1

function reverse(list, start, end){
  let t = null
  while (start<=end) {
    t = list[start]
    list[start] = list[end]
    list [end] = t
    start++
    end--
  }
}

function RShift(list, k) {
  const n = list.length
  if ( k%n === 0) return list
  reverse(list,0,n-k-1)
  reverse(list,n-k,n-1)
  reverse(list,0,n-1)
  return list
}
var arr = [1,2,3,4,5,6,7,8]
var k = 2
console.log(RShift(arr,k))

