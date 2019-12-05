#### this 
 - 谁调用 指向谁 
  1. 作为对象的方法被调用时，this指向这个对象
  2. 在全局环境下被调用时，this指向window
- 绑定的优先级
  obj.fn < call/apply/bind < new
### arguments 
    1. 每一个普通函数有的对象，对象里面有这个函数的所有参数
    2. 类数组对象 可以根据下标获取值(arguments[0]) 有length属性 
    3. 类数组=> 数组 
       Array.from() 
       Array.prototype.slice.apply()  借用数组的slice方法
       [...arguments]
