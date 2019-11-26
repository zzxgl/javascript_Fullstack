// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大
var arr = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
  let i,k,j;
  let thisSum;
  let maxSum = -Infinity;
  for( i =0; i<nums.length; i++) {
    for( k = i; k<nums.length; k++) {
    //   end: k  start: i
    console.log(nums[k])
    thisSum = 0
      for( j = i ; j<=k; j++ ) {
        thisSum += nums[j]
        // console.log(nums[j])
      }
      if(thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}
console.log(maxSubArray(arr))