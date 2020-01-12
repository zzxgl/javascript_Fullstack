var removeDuplicates = function(nums) {
  const size = nums.length; //原数组的长度
  let slowP = 0; //慢指针
  for (let fastP = 0; fastP < size; fastP++) {  //快指针
    // console.log(nums[fastP])
    if(nums[fastP] !== nums[slowP]) {  //从同一个位置0 开始  
      slowP++; //不一样时
    //   一旦 slowP挪窝了， 新的位置要确立新的数 ，cur 指向的数 
      nums[slowP] = nums[fastP]; //设置每个位置 不重复的数 确立地位 
    }
  }
  return slowP + 1; //返回新的数组的长度 slowP停下来的地方就是最后一项
}
console.log(removeDuplicates([0,0,1,1,2,2,3,4,6]))