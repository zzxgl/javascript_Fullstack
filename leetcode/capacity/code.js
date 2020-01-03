arr = [1,2,3,4,5,5,7,8,9]
sum = 17

function findSum1(arr,sum) {
  for(let i =0;i<arr.length;i++) {  //o(n^2) 时间复杂度
    for(let j = i+1;j<arr.length;j++) {
      if(arr[i] + arr[j] === sum) {
        console.log(i,j,arr[i],arr[j])
      }
    }
  }
}
findSum1(arr,sum)

function findSum(arr,sum) {
  let obj = {}
  arr.forEach((item,index) => {
    if (String(item) in obj) {
      console.log("找到了"+obj[item],index)
    }
    obj[sum - item] = index
  })
}
findSum(arr,sum)