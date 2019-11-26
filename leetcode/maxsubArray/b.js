var arr = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
  let i, k, thisSum, maxSum;
  maxSum = -Number.MAX_VALUE
  for( i = 0; i<nums.length; i++){
    thisSum = 0 
    for( k = i; k<nums.length; k++) {
    //   start : i  end:k
      thisSum += nums[k]
      if( thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}
console.log(maxSubArray(arr))