### weakSet与Set的区别 
  -  弱引用 自己生效完之后就会被垃圾回收机制默认回收 提高效率
  -  Set可以存放各种类型的数据 而WeakSet只能存放对象，数组（类数组）且该数组（类数组）的内部成员也要为对象，该数组的成员都会成为weakset实例对象的成员
  -  WeakSet 没有size属性
  -  WeakSet也不能被遍历 Set可以使用foreach 或者将Set转化为数组使用map和filter进行遍历
#### Map  
  -  key可以为任意类型   Object的key只能是字符串是唯一的
  -  .set()是map的一个方法 用来设置或修改实例当中的值
  -  .get()通过键名 获取value值
  -  .has() 判断是否在map对象中
  -  .size 获取map对象的长度
  -  不仅仅是双元素数组，任何具有Iterator接口，都可以作为Map的参数
  -  对不同对象的引用相同的值，在map结构中视为两个键
