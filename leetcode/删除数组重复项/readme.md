sortedArr [1,1,2] 3
return length 2

- 一次遍历 ？
  res []  空间复杂度 O(n)
  for 
  ！！！排序 后面的项一定会大于或者等于前面的项 
  !!!原地删除
  res length
  抽象能力， 数理逻辑

- 动图
  两个指针 pre cur
  cur 一直在往前跑 一次循环的每一项遍历
  pre 后面追
  pre cur arr 前一个，后一个
  不等于的时候 pre+1 
  相等（出现重复项） pre不走，慢下来
  如果 cur pre不一样，那么 pre + 1 值等于 cur
  牛，从头到尾都是排好序的不重复数
  每个位置放什么数
  pre 指针 没有跟上cur 的速度时， 表示有重复
  pre 和 cur 之间 会出现 n个空位
  pre + 1 位置上面的数删除 把当前的cur的值 交给pre

- 快慢指针
  1. 一次循环 cur++ 一直跑
  2. cur 跟 pre arr[]中的坐标值 不相等 pre++
     相等的话 pre不动
  3. cur 再走的时候， 继续比较
     新的cur  和旧的pre
     不等时，pre++ 并且把cur的值给 新的pre  
     把因为之前重复空出来的位置 填上
  4. cur > length时 完成

- 数据结构
  链表
  LinkedList next
  1 1 2 next指向1, 改为指向2

  把数组要位置位置  快慢指针要理解得多
