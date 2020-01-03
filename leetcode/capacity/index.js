// capacity 5 
//  a = (3,2) b = (4,3) c = (5,4)

var values = [3,4,5,7,20]
var weights = [2,3,4,1,5]  
var capacity = 5,      //背包的容量
    n = values.length  //商品的种类

function package(w,val,capacity,n) {
  let T = []
  for(let i = 0 ; i < n; i++) {
    T[i] = []  //二维数组 [[0,0,3,3,3],[0,0],[0,0]]
    for(let j = 0; j <= capacity; j++) {  //j 表示书包容量
      if (j === 0) {  //书包容量为0
        T[i][j] = 0
        continue 
      } 
      if(j < w[i]) {  // 书包容量小于任意一个商品的重量
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i-1][j]
        }
        continue;       
      }
      if(i === 0) {  //j>=w[i] 书包的容量大于任意一个商品的重量
      } else {
        T[i][j] = Math.max(val[i] + T[i-1][j-w[i]],T[i-1][j])
      }
    }
  }
  console.log(T)
  findValue(w,val,capacity,n,T)
  return T
}
function findValue(w,val,capacity,n,T) { //找需要的物品
  var i = n - 1,j = capacity
  while (i > 0 && j > 0) {  //背包里面
    if(T[i][j] !== T[i-1][j]) {
      console.log(`选择物品${i},重量：${w[i]},价值：${val[i]}`)
      j = j - w[i]
      i--
    } else {
      i--
    }
  }
  if(i === 0) {
    if(T[i][j] !== 0) {
      console.log(`选择物品${i},重量：${w[i]},价值：${val[i]}`)
    }
  }
}
package(weights,values,capacity,n)