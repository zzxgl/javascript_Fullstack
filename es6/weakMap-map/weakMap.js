// 在全局下调用gc() 垃圾回收
global.gc();
console.log(process.memoryUsage())


// 引用计数  (计算引用的数量)
// 新建一个数组 且数组的长度为 4*1024
let array = new Array(4 * 1024) // array变量引用了new出来的数组  计数 +1 有引用就不会进行垃圾回收
// let map = new Map() // 垃圾回收机制会考虑 引用会进行计数 强引用
let map = new WeakMap()   // 垃圾回收机制不会考虑  引用不进行计数 弱引用
//  array 被map引用 当作key  计数 +1
map.set(array,4)
array = null  //引用解除 计数 -1 
global.gc();  // 只有当计数为0 进行回收
console.log(process.memoryUsage())
